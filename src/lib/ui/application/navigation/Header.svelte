<!--
   @component
   
   Generic header bar.
   Modelled after: https://tailwindui.com/components/application-ui/navigation/navbars

    
-->
<script lang="ts">
	import Placeholder from '$lib/ui/util/Placeholder.svelte';
	import Container from '../layout/Container.svelte';

	/**
	 * fix width to the current breakpoint.
	 */
	export let fixed: boolean = true;

	/**
	 * stick to the top of the page
	 */
	export let sticky: boolean = true;

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<header class:sticky class:top-0={sticky} class={`min-h-8 w-full bg-red-100 ${clazz}`}>
	<Container class={`flex gap-4`} {fixed}>
		<div class="shrink">
			<slot name="left">
				<Placeholder />
			</slot>
		</div>
		<div class="grow">
			<slot name="middle">
				<Placeholder />
			</slot>
		</div>
		<div class="shrink">
			<slot name="right">
				<Placeholder />
			</slot>
		</div>
	</Container>
</header>
