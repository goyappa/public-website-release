<script lang="ts">
	export let question: string;
	export let answer: string;
	let collapsed: boolean = true;
</script>

<dl class="mt-6 bg-white">
	<div class="py-5 px-7">
		<dt>
			<!-- Expand/collapse question button -->
			<button
				type="button"
				class="flex w-full items-start justify-between text-left text-yappa-blue-400"
				aria-controls="faq-0"
				aria-expanded="false"
				on:click={() => (collapsed = !collapsed)}
			>
				<span class="text-lg font-semibold font-display text-yappa-blue-800">{question}</span>
				<span class="ml-6 flex h-7 items-center">
					{#if collapsed}
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
						</svg>
					{:else}
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
						</svg>
					{/if}
				</span>
			</button>
		</dt>
		{#if !collapsed}
			<dd class="mt-2 pr-12" id="faq-0">
				<p class="text-base leading-7 text-gray-600 text-body">
					{answer}
				</p>
			</dd>
		{/if}
	</div>
</dl>
