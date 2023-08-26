<script lang="ts">
	let clazz = '';
	/**
	 * Additional class overrides
	 */
	export { clazz as class };
</script>

<div class={`relative h-screen v-screen ${clazz}`}><slot /></div>
