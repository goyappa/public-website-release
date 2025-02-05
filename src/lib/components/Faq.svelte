<script lang="ts">
	import faqs from '$lib/static/faq';
	import FaqItem from './FaqItem.svelte';

	export let variant: 'collapsed' | 'expanded' = 'collapsed';
</script>

<div class="bg-transparent">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl">
			<h2
				class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-center mx-auto"
			>
				Frequently asked questions
			</h2>
			<p class="mt-6 max-w-2xl text-lg/7 text-gray-600 text-center mx-auto">
				Have a different question and can’t find the answer you’re looking for? Check out our <a
					href="https://docs.goyappa.com"
					target="_blank"
					class="font-semibold text-yappa-blue-500 hover:text-yappa-blue-400">documentation</a
				> or reach out!
			</p>
		</div>
		<div class="mt-20">
			{#if variant === 'collapsed'}
				<div class="mx-auto max-w-4xl">
					{#each faqs as faq}
						<FaqItem question={faq.question} answer={faq.answer} />
					{/each}
				</div>
			{:else}
				<div class="mx-auto max-w-7xl">
					<dl
						class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
					>
						{#each faqs as faq}
							<div>
								<dt class="text-base/7 font-semibold text-gray-900">
									{faq.question}
								</dt>
								<dd class="mt-2 text-base/7 text-gray-600">
									{faq.answer}
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			{/if}
		</div>
	</div>
</div>
