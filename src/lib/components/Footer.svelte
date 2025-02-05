<script lang="ts">
	import Instagram from './icons/Instagram.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
	import Logo from './Logo.svelte';
</script>

<div aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<Logo class="h-7 w-auto" />
				<p class="text-sm leading-6 text-yappa-blue-800 font-display">
					The ultimate toolkit for freelancers
				</p>
				<div class="flex space-x-6">
					<a href="https://www.instagram.com/go.yappa/" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<Instagram class="h-6 w-6" />
					</a>
					<a
						href="https://www.linkedin.com/company/go-yappa"
						class="text-gray-400 hover:text-gray-500"
					>
						<span class="sr-only">LinkedIn</span>
						<LinkedIn class="h-6 w-6" />
					</a>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
				<div class="mt-10 md:mt-0">
					<h3 class="text-sm font-semibold leading-6 text-gray-900">Product</h3>
					<ul role="list" class="mt-6 space-y-4">
						<li>
							<a href="/" target="_self" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
								>Home</a
							>
						</li>
						<li>
							<a
								href="/#features"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Features</a
							>
						</li>
						<li>
							<a
								href="/pricing"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a
							>
						</li>
						<li>
							<a
								href="/#about"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a
							>
						</li>
						<li>
							<a
								href="https://goyappa.com/blog"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a
							>
						</li>
						<li>
							<a
								href="https://docs.goyappa.com"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Docs</a
							>
						</li>
						<li>
							<button
								type="button"
								class="text-left text-sm leading-6 text-gray-600 hover:text-gray-900"
								data-cc="show-preferencesModal">Manage cookie preferences</button
							>
						</li>
					</ul>
				</div>
				<!-- <div class="mt-10 md:mt-0">
					<h3 class="text-sm font-semibold leading-6 text-gray-900">Compare</h3>
					<ul role="list" class="mt-6 space-y-4">
						<li>
							<a
								href="/compare/onecal-alternative"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">OneCal</a
							>
						</li>
						<li>
							<a
								href="/compare/toggl-track-alternative"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Toggl Track</a
							>
						</li>
						<li>
							<a
								href="/compare/clockwise-alternative"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Clockwise</a
							>
						</li>
					</ul>
				</div> -->
				<div class="mt-10 md:mt-0">
					<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
					<ul role="list" class="mt-6 space-y-4">
						<li>
							<a
								href="/legal/terms-of-service"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms of Service</a
							>
						</li>
						<li>
							<a
								href="/legal/privacy-policy"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy Policy</a
							>
						</li>
						<li>
							<a
								href="/legal/cookies-policy"
								target="_self"
								class="text-sm leading-6 text-gray-600 hover:text-gray-900">Cookies Policy</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				&copy; 2024 Coffee Tap Studio SRL. All rights reserved.
			</p>
		</div>
	</div>
</div>
