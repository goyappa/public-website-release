<script lang="ts">
	import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<SeoWrapper
	title="Blog | Yappa"
	description="Freelancer tips, productivity hacks, Yappa news and more"
>
	<div>
		<Hero variant="short">
			<div class="mx-auto max-w-5xl">
				<div class="text-center">
					<h1 class="text-5xl font-display font-bold text-yappa-blue-800 sm:text-6xl">Blog</h1>
					<p class="mt-6 text-lg font-body leading-8 text-yappa-blue-800">
						Freelancer tips, productivity hacks, Yappa news and more
					</p>
				</div>
			</div>
		</Hero>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each data.articles as article}
					<ArticleCard {article} />
				{/each}
			</div>
		</div>
	</div>
</SeoWrapper>
