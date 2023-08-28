<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { blur, fade, slide } from 'svelte/transition';

	export let hidden = false;
	export let modal = false;

	const axis: 'x' | 'y' = 'x';
	const transitionConf = { duration: 300, axis };
</script>

{#if !hidden}
	<div class="relative z-10 w-64 h-full flex flex-col gap-4 pt-4 pb-4 border-r" out:slide={transitionConf} in:slide={transitionConf}>
		<div class="">
			<slot name="top" />
		</div>
		<div class="grow">
			<slot name="middle" />
		</div>
		<div class="">
			<slot name="bottom" />
		</div>
	</div>
	{#if modal}
		<div class="absolute top-0 left-0 w-full h-full bg-black opacity-50" out:fade={transitionConf} in:fade={transitionConf} on:click={() => (hidden = true)} />
	{/if}
{/if}
