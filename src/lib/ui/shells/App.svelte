<script lang="ts">
	import Logo from '$lib/ui/Logo.svelte';
	import Link from '$lib/ui/application/buttons/Link.svelte';
	import VLink from '$lib/ui/application/buttons/VLink.svelte';
	import Screen from '$lib/ui/application/layout/Screen.svelte';
	import Header from '$lib/ui/application/navigation/Header.svelte';
	import Sidemenu from '$lib/ui/application/navigation/Sidemenu.svelte';
	import { fade, slide } from 'svelte/transition';
	import type { MenuItem } from './MenuItem.js';

	export let menu: MenuItem[];

	let hidden = false;
	const click = () => (hidden = !hidden);
</script>

<Screen class="flex">
	<Sidemenu {hidden}>
		<!-- -->
		<div slot="top">
			<Logo companyName="Praxomat" on:click={click} />
		</div>
		<div slot="middle">
			{#each menu as item}
				<VLink href={item.uri}>{item.label}</VLink>
			{/each}
		</div>
		<div slot="bottom">bottom</div>
	</Sidemenu>

	<div class="h-full w-full shrink overflow-auto flex flex-col">
		<Header fixed={false}>
			<div slot="left">
				{#if hidden}
					<Logo companyName="Your Company" on:click={click} />
				{/if}
			</div>
		</Header>
		<div class="grow overflow-auto"><slot /></div>
	</div>
</Screen>
