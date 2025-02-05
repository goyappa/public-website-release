<script lang="ts">
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import cookiesPolicy from '$lib/static/cookies.md?raw';
	import showdown from 'showdown';

	const converter = new showdown.Converter();
	converter.setOption('tables', true);
	const generatedHtml = converter.makeHtml(cookiesPolicy);
</script>

<SeoWrapper title="Cookies Policy | Yappa" description="Yappa Cookies Policy">
	{@html generatedHtml}
</SeoWrapper>
