<script lang="ts">
	import Transition from 'svelte-transition';

	export let show: boolean = false;

	const toggleMenu = () => {
		show = !show;
	};
</script>

<!-- Mobile menu, show/hide based on menu open state. -->
<div class="lg:hidden" role="dialog" aria-modal="true">
	<Transition
		{show}
		enter="duration-150 ease-out"
		enterFrom="opacity-0 scale-95"
		enterTo="opacity-100 scale-100"
		leave="duration-100 ease-in"
		leaveFrom="opacity-100 scale-100"
		leaveTo="opacity-0 scale-95"
	>
		<div
			class="absolute -mt-4 inset-x-0 top-full flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
		>
			<div class="space-y-2 pb-4 pt-2 divide-y divide-solid">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
				<div class="space-y-1">
					<a
						href="/"
						target="_self"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>Home</a
					>
					<a
						href="/#features"
						target="_self"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>Features</a
					>
					<a
						href="/pricing"
						target="_self"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>Pricing</a
					>
					<a
						href="/#about"
						target="_self"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>About</a
					>
					<a
						href="/blog"
						target="_self"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>Blog</a
					>
					<a
						href="https://docs.goyappa.com"
						class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
						on:click={toggleMenu}>Docs</a
					>
				</div>
				<div class="pt-2">
					<a
						href="https://app.goyappa.com/register"
						class="block py-2 pl-3 pr-4 text-base text-gray-500 font-bold">Sign up</a
					>
					<a
						href="https://app.goyappa.com/login"
						class="block py-2 pl-3 pr-4 text-base font-bold text-gray-500">Log in</a
					>
				</div>
			</div>
		</div>
	</Transition>
</div>
