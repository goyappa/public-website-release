<script lang="ts">
	import testimonials from '$lib/static/testimonials';
	import Star from './icons/Star.svelte';
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				class="mt-2 text-balance text-4xl font-semibold tracking-tight text-yappa-blue-900 sm:text-5xl"
			>
				Freelancers love Yappa
			</h2>
			<a
				href="https://www.producthunt.com/posts/yappa?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-yappa"
				target="_blank"
				><img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=626884&theme=light"
					alt="Yappa - The&#0032;ultimate&#0032;freelancer&#0032;tool | Product Hunt"
					class="max-w-48 h-auto mx-auto mt-6"
				/></a
			>
			<a href="https://www.uneed.best/tool/yappa" target="_blank" rel="noreferrer">
				<enhanced:img
					src="$lib/assets/uneed-won-badge.png"
					alt="Uneed POTD1 Badge"
					class="max-w-48 h-auto mx-auto mt-6"
				/>
			</a>
		</div>
		<div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
				{#each testimonials as testimonial}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="rounded-2xl bg-gray-50 py-2 px-8 text-sm/6">
							<div class="py-4 inline-flex items-start gap-x">
								{#each Array.from({ length: testimonial.rating }) as _}
									<Star class="w-4 h-4 text-yappa-orange-400" />
								{/each}
							</div>
							<blockquote class="mt-4 pb-2 text-gray-900">
								<p>
									“{testimonial.review}”
								</p>
							</blockquote>
						</figure>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
