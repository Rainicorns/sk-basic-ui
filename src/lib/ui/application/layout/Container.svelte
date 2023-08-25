<!--
 @component
 Generic container.
Modelled after: https://tailwindui.com/components/application-ui/layout/containers

-->
<script>
	import Placeholder from '$lib/ui/util/Placeholder.svelte';

	/**
	 * fix width to the current breakpoint.
	 */
	export let fixed = false;

	/**
	 * Apply default padding to the container in non-mobile views.
	 */
	export let desktopPadded = false;

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<div
	class:container={fixed}
	class:sm:px-6={desktopPadded}
	class:lg:px-8={desktopPadded}
	class={`mx-auto h-full bg-red-100 ${clazz}`}
>
	<slot>
		<Placeholder />
	</slot>
</div>
