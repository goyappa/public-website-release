<script lang="ts">
	import Button from './Button.svelte';
	import Tick from './icons/Tick.svelte';

	type BillingFrequency = 'monthly' | 'annually';
	let billingFrequency: BillingFrequency = 'annually';

	const pricing: Record<BillingFrequency, number> = {
		monthly: 10,
		annually: 8.33
	};
</script>

<div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Simple, transparent pricing
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Try Yappa <span class="font-bold">free for 14 days</span> and experience the difference
			</p>
		</div>
		<div class="mt-32 flex justify-center">
			<fieldset aria-label="Payment frequency">
				<div
					class="grid grid-cols-2 gap-x-4 rounded-full p-2 text-center text-sm font-display font-semibold leading-5 ring-1 ring-inset ring-gray-200 bg-white"
				>
					<!-- Checked: "bg-indigo-600  text-white", Not Checked: "text-gray-500" -->
					<label
						class="cursor-pointer rounded-full px-2.5 py-2 text-gray-500"
						class:text-gray-500={billingFrequency !== 'monthly'}
						class:bg-yappa-blue-400={billingFrequency === 'monthly'}
						class:text-white={billingFrequency === 'monthly'}
						class:font-bold={billingFrequency === 'monthly'}
					>
						<input
							type="radio"
							name="frequency"
							value="monthly"
							class="sr-only"
							bind:group={billingFrequency}
						/>
						<span>Monthly</span>
					</label>
					<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
					<label
						class="cursor-pointer rounded-full px-2.5 py-2 text-gray-500"
						class:text-gray-500={billingFrequency !== 'annually'}
						class:bg-yappa-blue-400={billingFrequency === 'annually'}
						class:text-white={billingFrequency === 'annually'}
						class:font-bold={billingFrequency === 'annually'}
					>
						<input
							type="radio"
							name="frequency"
							value="annually"
							class="sr-only"
							bind:group={billingFrequency}
						/>
						<span
							>Yearly <span
								class="rounded-lg bg-yappa-blue-200 mx-2 px-2 py-1 text-xs font-bold leading-5 text-white"
								>16% off</span
							></span
						>
					</label>
				</div>
			</fieldset>
		</div>
		<div
			class="bg-white mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none"
		>
			<div class="p-8 sm:p-10 lg:flex-auto">
				<h3 class="text-2xl font-bold tracking-tight text-gray-900">
					Pay for what you need and nothing more.
				</h3>
				<p class="mt-6 text-base leading-7 text-gray-600">
					The base subscription includes most of the Yappa feature set. Over time, new features that
					cannot be sustained through the base subscription will be made available through
					individual add-ons that can be added to your base subscription for an additional fee if
					you need them.
				</p>
				<div class="mt-10 flex items-center gap-x-4">
					<h4 class="flex-none text-sm font-semibold leading-6 text-yappa-blue-400">
						What’s included
					</h4>
					<div class="h-px flex-auto bg-gray-100"></div>
				</div>
				<ul
					role="list"
					class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
				>
					<li class="flex gap-x-3 items-center">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						<div>
							<!-- <span
								class="tooltip underline text-slate-600"
								data-tip="Subject to fair use limit of 20 calendars, which can be increased on request at no extra cost."
								>Unlimited</span
							> -->
							Unlimited calendars
						</div>
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						<div>Unlimited calendar synchronizations</div>
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						Unlimited booking links
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						Consolidated calendar view
						<!-- <span
							class="tooltip underline text-slate-600"
							data-tip="View all your connected calendars in one place."
						>
							<Info class="h-4 w-4" />
						</span> -->
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						Manual time tracking for non-calendar tasks
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						Track time against clients and projects
					</li>
					<li class="flex gap-x-3">
						<Tick class="h-6 w-5 flex-none text-yappa-blue-200" />
						NEW: 5 contract reviews per month
					</li>
				</ul>
			</div>
			<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
				<div
					class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full"
				>
					<div class="mx-auto max-w-sm px-8">
						<p class="mt-6 mb-5 flex items-baseline justify-center gap-x-2">
							<span class="text-5xl font-bold tracking-tight text-gray-900"
								>€{pricing[billingFrequency]}</span
							>
							<span class="text-xl font-semibold leading-6 tracking-wide text-gray-600"
								>/ month</span
							>
						</p>

						<Button href="https://app.goyappa.com/register" variant="primary" size="medium"
							>Start free trial</Button
						>
						<p class="mt-6 text-xs leading-5 text-gray-600">
							{#if billingFrequency === 'annually'}
								Billed annually.
							{/if}
							Pricing may be different and additional taxes may apply on checkout based on your billing
							details.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
