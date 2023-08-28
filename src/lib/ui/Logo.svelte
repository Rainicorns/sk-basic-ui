<script lang="ts">
	export let src = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500';
	export let companyName: string;

	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<img class={`h-8 w-auto ${clazz}`} {src} alt={companyName} on:click />
