<script lang="ts">
	export let variant: 'tall' | 'short' = 'tall';

	const classes = {
		tall: 'py-44 sm:py-60 lg:py-70',
		short: 'py-12'
	};
</script>

<div class="relative isolate px-6 lg:px-0">
	{#if variant === 'tall'}
		<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu md:-top-40" aria-hidden="true">
			<div
				class="relative w-[100rem] -translate-x-1/4 md:left-[calc(70%-11rem)] md:-translate-x-2/4 lg:left-[calc(55%-11rem)] lg:-translate-x-2/3 aspect-[1915/1127]"
			>
				<enhanced:img
					src="$lib/assets/hero-background.png"
					alt="Hero background"
					class="w-full h-full"
				/>
			</div>
		</div>
	{/if}
	<div class={classes[variant]}>
		<slot />
	</div>
</div>
