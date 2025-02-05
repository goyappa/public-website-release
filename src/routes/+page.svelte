<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Button from '$lib/components/Button.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Features from '$lib/components/Features.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SeoWrapper from '$lib/components/SeoWrapper.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<SeoWrapper
	title="The Ultimate Freelancer Tool for Streamlining Your Work | Yappa"
	description="Yappa is the ultimate freelancer tool designed to streamline your schedule, avoid double-booking, and manage clients effortlessly. Boost your productivity and efficiency with our all-in-one tools built for freelancers."
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
		<section id="hero">
			<Hero>
				<div class="mx-auto max-w-5xl">
					<div class="text-center">
						<h1 class="text-5xl font-display font-bold text-yappa-blue-800 sm:text-6xl">
							The ultimate freelancer tool for your work
						</h1>
						<p class="mt-6 text-lg font-body leading-8 text-yappa-blue-800">
							Streamline your schedule, avoid double-booking, and manage clients effortlessly with
							Yappa. We're building tools to boost your productivity and efficiency.
						</p>
						<div
							class="mt-10 flex flex-col items-center font-display justify-center gap-x-6 gap-y-4"
						>
							<Button href="https://app.goyappa.com/register" variant="contrast" size="xl"
								>Try Yappa Now</Button
							>
							<span class="text-gray-600 text-sm">No credit card required</span>
						</div>
					</div>
				</div>
			</Hero>
		</section>
		<section id="features">
			<Features />
		</section>
		<section>
			<Testimonials />
		</section>
		<section id="about">
			<About />
		</section>
		<section id="faq">
			<Faq variant="collapsed" />
		</section>
		<section>
			<Cta />
		</section>
	</div>
</SeoWrapper>
