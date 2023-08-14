<script lang="ts">
	export let target: string = '';
	export let onClick = () => {};
	export let disabled = false;

	import { goto } from '$app/navigation';
	import ArrowRight from './svg/ArrowRight.svelte';
</script>

<button
	on:click={() => {
		if (disabled) return;

		onClick();
		if (target) goto(target);
	}}
	class={'z-20 flex flex-row' + (disabled ? ' opacity-50 cursor-not-allowed' : '')}
>
	<p>ต่อไป</p>
	<ArrowRight />
</button>
