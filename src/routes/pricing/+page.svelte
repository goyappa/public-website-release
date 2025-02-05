<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<SeoWrapper
	title="Pricing | Yappa"
	description="Yappa offers the ultimate freelancer tools designed to streamline your schedule, avoid double-booking, and manage clients effortlessly. Boost your productivity and efficiency with our all-in-one tools built for freelancers."
	keywords={[
		'freelancer tools',
		'freelancer tool',
		'tools for freelancers',
		'freelance business tools',
		'productivity',
		'scheduling',
		'time tracking',
		'calendar',
		'management'
	]}
>
	<div>
		<section>
			<Hero>
				<Pricing />
			</Hero>
		</section>
		<section>
			<Testimonials />
		</section>
		<section>
			<Faq variant="expanded" />
		</section>
		<section>
			<About />
		</section>
	</div>
</SeoWrapper>
