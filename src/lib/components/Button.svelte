<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let variant:
		| 'primary'
		| 'primary-inverted'
		| 'destructive-action'
		| 'neutral'
		| 'contrast'
		| 'contrast-inverted';
	export let size: 'small' | 'medium' | 'large' | 'xl' = 'medium';
	('px-3 py-2');
	const baseClasses =
		'rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-semibold';
	const variantClasses = {
		primary:
			'text-white bg-yappa-blue-400 hover:bg-yappa-blue-300 focus-visible:outline-yappa-blue-400',
		'primary-inverted':
			'bg-white text-yappa-blue-600 hover:bg-gray-100 outline outline-2 outline-yappa-blue-300',
		'destructive-action': 'bg-red-600 text-white hover:bg-red-500',
		neutral: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
		contrast:
			'text-black bg-yappa-orange-400 hover:bg-yappa-orange-300 focus-visible:outline-yappa-orange-400',
		'contrast-inverted':
			'bg-white text-yappa-orange-600 hover:bg-gray-100 border-2 border-yappa-orange-300'
	};
	const sizeClasses = {
		small: 'px-2 py-1 text-sm',
		medium: 'px-3 py-2 text-sm',
		large: 'px-4 py-3 text-base',
		xl: 'px-6 py-4 text-lg'
	};
</script>

{#if href}
	<a
		{href}
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {$$props.class ?? ''}"
		{target}
	>
		<slot />
	</a>
{:else}
	<button
		class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {$$props.class ?? ''}"
		on:click|stopPropagation
	>
		<slot />
	</button>
{/if}
