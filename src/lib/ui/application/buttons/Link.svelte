<script lang="ts">
	export let href: string = '#';

	export let selected: boolean = false;
	export let selectedClasses: string =
		'hover:bg-indigo-300 border-b-4 border-indigo-500 -pb-4 text-indigo-600 hover:text-indigo-200 h-full items-center text-sm font-medium flex';

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<a
	{href}
	class={`text-indigo-400 hover:text-indigo-600 ${selected ? selectedClasses : ''} ${clazz}`}
	><slot /></a
>
