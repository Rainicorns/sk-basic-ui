<!--
	@component
	A link component that assume sideways layout.
	
-->
<script lang="ts">
	import { browser, dev, building, version } from '$app/environment';
	import { relPathToAbs } from '$lib/ui/util/functions/relPathToAbs.js';
	import { location } from '$lib/ui/util/stores/location.js';

	export let href: string = '#';
	export let selected: boolean = false;
	export let selectedClasses: string = 'bg-sky-200 border-sky-900 -pb-4 text-sky-800 hover:text-sky-700';
	export let click: () => void = () => {};

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };

	$: if (browser) selected = $location.href === relPathToAbs(href) || $location.href + '#' === relPathToAbs(href);
</script>

<a {href} class:border-slate-300={!selected} class={`hover:bg-sky-100 pl-4 py-2 transition-all h-full items-center flex font-medium text-indigo-400 border-r-4 hover:text-indigo-600 ${selected ? selectedClasses : ''} ${clazz}`} on:click={click}>
	<slot />
</a>
