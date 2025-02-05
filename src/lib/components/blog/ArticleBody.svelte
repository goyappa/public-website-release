<script lang="ts">
	import type { Article } from '$lib/services/blog';
	import Button from '../Button.svelte';

	export let article: Article;
</script>

<div
	class="mx-auto text-left max-w-5xl flex flex-col lg:flex-row gap-y-8 lg:gap-x-10 lg:gap-y-0 px-6"
>
	<div class="lg:hidden top-2">
		<div class="rounded-lg bg-gray-200/50 p-8 space-y-6 text-center">
			<p class="text-3xl font-bold">Ready to Improve Your Freelancing?</p>
			<p class="text-sm">
				Streamline your schedule, avoid double-booking, and manage clients effortlessly with Yappa.
				We're building tools to boost your productivity and efficiency.
			</p>
			<div class="pt-4">
				<Button href="https://app.goyappa.com/register" variant="primary" size="large"
					>Join Yappa Today</Button
				>
			</div>
		</div>
	</div>
	<div>
		{@html article.html}
	</div>
	<div class="min-w-[300px]">
		<div class="hidden lg:block lg:sticky top-2">
			<div class="rounded-lg bg-gray-200/50 p-8 space-y-6 text-center">
				<p class="text-3xl font-bold">Ready to Improve Your Freelancing?</p>
				<p class="text-sm">
					Streamline your schedule, avoid double-booking, and manage clients effortlessly with
					Yappa. We're building tools to boost your productivity and efficiency.
				</p>
				<div class="pt-4">
					<Button href="https://app.goyappa.com/register" variant="primary" size="large"
						>Join Yappa Today</Button
					>
				</div>
			</div>
		</div>
	</div>
</div>
