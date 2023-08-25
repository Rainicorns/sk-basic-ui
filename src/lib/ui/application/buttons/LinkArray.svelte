<!--
	@component
	Links in a row, with a gap between them.
	
-->
<script lang="ts">
	import Link from './Link.svelte';

	/**
	 * Justify the links to the left, center, or right
	 */
	export let justify: 'left' | 'center' | 'right' = 'center';

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<div class:justify-center={justify === 'center'} class:justify-start={justify === 'left'} class:justify-end={justify === 'right'} class={`h-full flex flex-cols gap-4 items-center ${clazz}`}>
	<slot>
		<Link href="#dashboard" selected={true}>Dashboard</Link>
		<Link href="#team">Team</Link>
		<Link href="#projects">Projects</Link>
		<Link href="#calendar">Calendar</Link>
	</slot>
</div>
