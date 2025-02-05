import { getArticleSummaries } from '$lib/services/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await getArticleSummaries();

	return {
		articles
	};
};

export const prerender = true;
