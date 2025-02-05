<script lang="ts">
	import MobileNavigation from './nav/MobileNavigation.svelte';
	import Logo from './Logo.svelte';
	import DesktopNavigation from './nav/DesktopNavigation.svelte';
	import Burger from './icons/Burger.svelte';
	import Button from './Button.svelte';

	let mobileMenuOpen: boolean = false;
	const toggleMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};
</script>

<nav class="bg-transparent sticky top-0 z-40 font-display">
	<div class="mx-auto flex max-w-7xl items-center justify-between py-5 px-2" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Yappa</span>
				<Logo class="h-10 w-auto" />
			</a>
		</div>

		<DesktopNavigation />
		<div class="hidden lg:flex flex-1 justify-end gap-x-6">
			<Button href="https://app.goyappa.com/register" variant="primary-inverted" size="large"
				>Sign up</Button
			>
			<Button href="https://app.goyappa.com/login" variant="primary" size="large">Log in</Button>
		</div>
		<div class="flex lg:hidden mx-4">
			<button
				type="button"
				class="-m-2.5 -mb-0.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				<Burger class="h-6 w-6" />
			</button>
		</div>
	</div>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<MobileNavigation bind:show={mobileMenuOpen} />
</nav>
