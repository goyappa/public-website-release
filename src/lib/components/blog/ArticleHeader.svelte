<script lang="ts">
	import type { Article } from '$lib/services/blog';
	import { DateTime } from 'luxon';
	import Hero from '../Hero.svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
	import Clock from '../icons/Clock.svelte';
	import Calendar from '../icons/Calendar.svelte';

	export let article: Article;
</script>

<Hero variant="short">
	<div class="mx-auto max-w-5xl">
		<div class="flex flex-col w-full">
			<Breadcrumbs
				links={[
					{
						href: '/',
						text: 'Home'
					},
					{
						href: '/blog',
						text: 'Blog'
					},
					{
						text: article.title
					}
				]}
			/>
			<div class="mt-10">
				<h1
					class="text-left leading-tight sm:leading-tight text-5xl font-bold text-gray-800 sm:text-6xl"
				>
					{article.title}
				</h1>
			</div>
			<div class="inline-flex items-start text-left mt-8 gap-x-12 flex-wrap gap-y-4">
				<div class="relative flex items-center gap-x-4">
					<enhanced:img
						src="$lib/assets/avatar-square.jpg"
						alt=""
						class="size-10 rounded-full bg-gray-100"
					/>
					<div class="text-sm/6">
						<p class="font-semibold text-gray-900">
							<a href="#">
								<span></span>
								Radu Ghitescu
							</a>
						</p>
						<p class="text-gray-600">Founder</p>
					</div>
				</div>
				<div class="relative flex items-center gap-x-4">
					<Calendar class="size-10 rounded-full bg-gray-100" />
					<div class="text-sm/6">
						<p class="font-semibold text-gray-900">
							<span></span>
							Published on
						</p>
						<p class="text-gray-600">
							{DateTime.fromISO(article.createdAt).toFormat('dd MMMM, yyyy')}
						</p>
						<span class="text-gray-600"> </span>
					</div>
				</div>
				<div class="relative flex items-center gap-x-4">
					<Clock class="size-10 rounded-full bg-gray-100" />
					<div class="text-sm/6">
						<p class="font-semibold text-gray-900">
							<span></span>
							Reading time
						</p>
						<p class="text-gray-600">
							{article.readingTime}
						</p>
						<span class="text-gray-600"> </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</Hero>
