<script lang="ts">
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import tos from '$lib/static/tos.md?raw';
	import showdown from 'showdown';

	const generatedHtml = new showdown.Converter().makeHtml(tos);
</script>

<SeoWrapper title="Terms of Service | Yappa" description="Yappa Terms of Service">
	{@html generatedHtml}
</SeoWrapper>
