<script lang="ts">
	import type { ArticleSummary } from '$lib/services/blog';
	import { DateTime } from 'luxon';

	export let article: ArticleSummary;
</script>

<article class="flex flex-col items-start justify-between">
	<div class="relative w-full">
		<img
			src={article.thumbnail}
			alt=""
			class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
		/>
		<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
	</div>
	<div class="max-w-xl">
		<div class="mt-8 flex items-center gap-x-4 text-sm">
			<time
				datetime={DateTime.fromISO(article.createdAt).toFormat('yyyy-MM-dd')}
				class="text-gray-500">{DateTime.fromISO(article.createdAt).toFormat('dd MMMM, yyyy')}</time
			>
			{#each article.tags as tag}
				<span
					class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
					>{tag}</span
				>
			{/each}
		</div>
		<div class="group relative">
			<h3 class="mt-3 text-xl/6 font-semibold text-gray-900 group-hover:text-gray-600">
				<a href="/blog/{article.slug}" target="_self">
					{article.title}
				</a>
			</h3>
			<p class="mt-5 line-clamp-6 text-sm/6 text-gray-600">
				{article.summary}
			</p>
		</div>
		<div class="relative mt-8 flex items-center gap-x-4">
			<enhanced:img
				src="$lib/assets/avatar-square.jpg"
				alt=""
				class="size-10 rounded-full bg-gray-100"
			/>
			<div class="text-sm/6">
				<p class="font-semibold text-gray-900">
					<span class="absolute inset-0"></span>
					Radu Ghitescu
				</p>
				<p class="text-gray-600">Founder</p>
			</div>
		</div>
	</div>
</article>
