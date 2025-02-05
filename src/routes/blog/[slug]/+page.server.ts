import { getArticleBySlug, getSimilarArticleSummaries } from '$lib/services/blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const article = await getArticleBySlug(slug);

	if (article === null) {
		throw error(404, {
			message: 'Article not found'
		});
	}

	const similarArticleSummaries = await getSimilarArticleSummaries(article, 3);

	return {
		props: {
			article,
			similarArticleSummaries
		}
	};
};

export const prerender = true;
