<script lang="ts">
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import privacyPolicy from '$lib/static/privacy.md?raw';
	import showdown from 'showdown';

	const converter = new showdown.Converter();
	converter.setOption('tables', true);
	const generatedHtml = converter.makeHtml(privacyPolicy);
</script>

<SeoWrapper title="Privacy Policy | Yappa" description="Yappa Privacy Policy">
	{@html generatedHtml}
</SeoWrapper>
