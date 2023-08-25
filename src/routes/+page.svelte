<script>
	import Container from '$lib/ui/application/layout/Container.svelte';
	import Header from '$lib/ui/application/navigation/Header.svelte';
	import Logo from '$lib/ui/Logo.svelte';
	import LinkArray from '$lib/ui/application/buttons/LinkArray.svelte';
</script>

<Header>
	<Logo slot="left" companyName="Your Company" />
	<LinkArray slot="middle" />
	<div slot="right" class="h-full relative z-10 ml-4 flex items-center">
		<button
			type="button"
			class="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			<span class="absolute -inset-1.5" />
			<span class="sr-only">View notifications</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
				/>
			</svg>
		</button>

		<div class="relative ml-4 flex-shrink-0">
			<div>
				<button
					type="button"
					class="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					id="user-menu-button"
					aria-expanded="false"
					aria-haspopup="true"
				>
					<span class="absolute -inset-1.5" />
					<span class="sr-only">Open user menu</span>
					<img
						class="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</button>
			</div>
		</div>
	</div>
</Header>

<div class="p-16 w-screen h-screen">
	<div class="w-full h-full border">
		<Container desktopPadded={true} class="bg-blue-100" />
	</div>
</div>
