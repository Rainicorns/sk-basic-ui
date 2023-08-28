<!--
	@component
	A link component that assume verical layout.
	
-->
<script lang="ts">
	import { browser, dev, building, version } from '$app/environment';
	import { relPathToAbs } from '$lib/ui/util/functions/relPathToAbs.js';
	import { location } from '$lib/ui/util/stores/location.js';

	export let href: string = '#';
	export let selected: boolean = false;
	export let selectedClasses: string = 'border-b-4 border-indigo-500 -pb-4 text-indigo-600 hover:text-indigo-200';

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };

	$: if (browser) selected = $location.href === relPathToAbs(href);
</script>

<a {href} class:border-transparent={!selected} class={`transition-all h-full items-center flex font-medium text-indigo-400 border-b-4 border-transparent hover:text-indigo-600 ${selected ? selectedClasses : ''} ${clazz}`}>
	<slot />
</a>
