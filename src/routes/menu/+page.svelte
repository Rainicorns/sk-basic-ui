<script lang="ts">
	import Logo from '$lib/ui/Logo.svelte';
	import Link from '$lib/ui/application/buttons/Link.svelte';
	import Screen from '$lib/ui/application/layout/Screen.svelte';
	import Sidemenu from '$lib/ui/application/navigation/Sidemenu.svelte';
	import LifeOnEarth from '$lib/ui/util/mockContent/LifeOnEarth.svelte';
	import { fade, slide } from 'svelte/transition';

	let hidden = false;
</script>

<Screen class="flex">
	<Sidemenu {hidden}>
		<!-- -->
		<div slot="top">
			<Logo companyName="Praxomat" />
		</div>
		<div slot="middle">
			<Link href="./menu#">Menu</Link>
			<Link href="#dashboard">Dashboard</Link>
			<Link href="#team">Team</Link>
		</div>
		<div slot="bottom">bottom</div>
	</Sidemenu>

	<div class="h-full w-full shrink overflow-auto">
		<span on:click={() => (hidden = !hidden)}>Toggle</span>
		<LifeOnEarth />
	</div>
</Screen>
