<script lang="ts">
	import Button from './Button.svelte';
</script>

<div class="bg-yappa-blue-400 -mx-20 rounded-b-[50%] overflow-x-hidden">
	<div class="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8 mx-auto max-w-[75%]">
		<div class="text-center flex flex-col">
			<h2 class="text-5xl font-bold tracking-tight text-white sm:text-5xl">
				See all you can accomplish with Yappa
			</h2>
			<div class="mt-14 flex flex-col gap-y-4 items-center justify-center gap-x-6">
				<Button variant="primary-inverted" size="xl" href="https://app.goyappa.com/register"
					>Try Yappa Now</Button
				>
				<span class="text-gray-100 text-sm">No credit card required</span>
			</div>
		</div>
	</div>
</div>
