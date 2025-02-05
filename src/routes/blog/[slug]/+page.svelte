<script lang="ts">
	import type { PageData } from './$types';
	import ArticleHeader from '$lib/components/blog/ArticleHeader.svelte';
	import ArticleBody from '$lib/components/blog/ArticleBody.svelte';
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	export let data: PageData;
	const article = data.props.article;
</script>

<SeoWrapper
	title="{article.title} | Yappa"
	description={article.summary}
	image={data.props.article.thumbnail}
>
	<div class="h-fit">
		<ArticleHeader {article} />
		<ArticleBody {article} />
	</div>
</SeoWrapper>
