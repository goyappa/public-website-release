<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let image: string = 'https://goyappa.com/images/og-image.jpg';
	export let keywords: string[] | undefined = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href="https://goyappa.com{$page.url.pathname.toString()}" />
	<meta name="description" content={description} />
	<meta property="og:site_name" content="Yappa" />
	<meta property="og:url" content="https://goyappa.com{$page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="goyappa.com" />
	<meta property="twitter:url" content="https://goyappa.com{$page.url.pathname.toString()}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{#if keywords}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	{@html `<script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title}",
   "url": "https//goyappa.com${$page.url.pathname}",
   "logo": "${image}"  }</script>`}
</svelte:head>

<slot />
