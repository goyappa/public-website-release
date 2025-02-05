<script lang="ts">
	type Link = {
		href?: string;
		text: string;
	};
	export let links: Link[] = [];
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-8">
		{#each links as link, index}
			{#if index > 0}
				<li>
					<span class="text-gray-300">/</span>
				</li>
			{/if}
			<li>
				{#if index === 0}
					<div>
						{#if link.href}
							<a
								href={link.href}
								target="_self"
								class="text-sm text-gray-500 hover:text-gray-400 underline font-bold">{link.text}</a
							>
						{:else}
							<span class="text-sm text-gray-400">{link.text}</span>
						{/if}
					</div>
				{:else}
					<div class="flex items-center">
						{#if link.href}
							<a
								href={link.href}
								target="_self"
								class="text-sm font-medium text-gray-500 hover:text-gray-400 underline font-bold"
								>{link.text}</a
							>
						{:else}
							<span
								class="text-sm font-medium text-gray-500"
								class:md:max-w-lg={index === links.length - 1}
								class:max-w-[160px]={index === links.length - 1}
								class:truncate={index === links.length - 1}>{link.text}</span
							>
						{/if}
					</div>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
