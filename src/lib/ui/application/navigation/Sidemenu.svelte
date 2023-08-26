<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { blur, fade, slide } from 'svelte/transition';

	export let hidden = false;

	const axis: 'x' | 'y' = 'x';
	const transitionConf = { duration: 300, axis };
</script>

{#if !hidden}
	<div class="relative w-64 bg-red-100 h-full flex flex-col gap-2" out:slide={transitionConf} in:slide={transitionConf}>
		<div class="bg-blue-100">
			<slot name="top" />
		</div>
		<div class="bg-blue-100 grow">
			<slot name="middle" />
		</div>
		<div class="bg-blue-100">
			<slot name="bottom" />
		</div>
	</div>
{/if}
