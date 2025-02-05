import { mdConverter } from '$lib/client/markdown';
import { DateTime, Duration } from 'luxon';
import fs from 'fs/promises';

export type ArticleMetadata = {
	title: string;
	thumbnail: string;
	createdAt: string;
	updatedAt: string;
	summary: string;
	tags: string[];
};
export type Article = ArticleMetadata & {
	slug: string;
	markdown: string;
	html: string;
	readingTime: string;
	createdAt: string;
	updatedAt: string;
};

export type ArticleSummary = ArticleMetadata & {
	slug: string;
	createdAt: string;
	updatedAt: string;
};

export async function readArticle(basePath: string, slug: string): Promise<Article> {
	try {
		const path = `${basePath}/${slug}`;
		const metadata: ArticleMetadata = await readFileAsJson(`${path}/article.json`);
		const articleMarkdown: string = await readFileAsString(`${path}/article.md`);

		return {
			...metadata,
			readingTime: calculateReadingTime(articleMarkdown),
			slug,
			markdown: articleMarkdown,
			html: mdConverter.makeHtml(articleMarkdown),
			createdAt: metadata.createdAt,
			updatedAt: metadata.updatedAt
		};
	} catch (error) {
		throw error;
	}
}

export async function getArticles(): Promise<Article[]> {
	const articleDirectories = await getDirectoriesInPath('blog/articles');
	const articles = await Promise.all(
		articleDirectories.map((directory) => readArticle('blog/articles', directory))
	);

	return articles
		.filter((article): article is Article => article !== null)
		.sort(
			(a, b) => DateTime.fromISO(b.createdAt).toMillis() - DateTime.fromISO(a.createdAt).toMillis()
		);
}

export async function getMostRecentArticleSummaries(count?: number): Promise<ArticleSummary[]> {
	const result = await getArticles();

	if (!count) {
		return result;
	}
	return result.slice(0, count);
}

export async function getArticleBySlug(slug: string): Promise<Article> {
	const article = await readArticle('blog/articles', slug);
	return article;
}

export async function getArticleSummaries(): Promise<ArticleSummary[]> {
	return await getMostRecentArticleSummaries();
}

export async function getSimilarArticleSummaries(
	refArticle: Article | ArticleSummary,
	count: number
): Promise<ArticleSummary[]> {
	const articleSummaries = await getMostRecentArticleSummaries();
	const shuffledArticleSummaries = articleSummaries.sort(() => 0.5 - Math.random());

	let articlesWithSimilarTags = shuffledArticleSummaries.filter((article) => {
		return (
			article.slug !== refArticle.slug && article.tags.some((tag) => refArticle.tags.includes(tag))
		);
	});

	if (articlesWithSimilarTags.length < count) {
		const fillerArticles: ArticleSummary[] = shuffledArticleSummaries.filter((article) => {
			return article.slug !== refArticle.slug && !articlesWithSimilarTags.includes(article);
		});
		articlesWithSimilarTags = articlesWithSimilarTags.concat(
			...fillerArticles.slice(0, count - articlesWithSimilarTags.length)
		);
	}

	return articlesWithSimilarTags;
}

async function readFileAsString(path: string): Promise<string> {
	return (await fs.readFile(path)).toString();
}

async function readFileAsJson<T>(path: string): Promise<T> {
	return JSON.parse(await readFileAsString(path)) as unknown as T;
}

async function getDirectoriesInPath(path: string): Promise<string[]> {
	const files = await fs.readdir(path);
	const directories: string[] = [];

	for (const file of files) {
		const stat = await fs.stat(`${path}/${file}`);
		if (stat.isDirectory()) {
			directories.push(file);
		}
	}

	return directories;
}

function calculateReadingTime(text: string, wpm: number = 265): string {
	const numberOfWords = text.split(/\s+/).length;
	const numberOfMinutes = Math.max(Math.ceil(numberOfWords / wpm), 1);

	return Duration.fromObject({ minutes: numberOfMinutes }).toHuman();
}
