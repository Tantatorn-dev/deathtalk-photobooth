<script lang="ts">
	export let target: string = '';
	export let onClick = () => {};

	import { goto } from '$app/navigation';
	import ArrowRight from './svg/ArrowRight.svelte';
</script>

<button
	on:click={() => {
		onClick();

		if (target) goto(target);
	}}
	class="flex flex-row"
>
	<p>ต่อไป</p>
	<ArrowRight />
</button>
