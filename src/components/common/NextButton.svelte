<script lang="ts">
	export let target: string;

	import { goto } from '$app/navigation';
	import ArrowRight from '../photo/ArrowRight.svelte';
</script>

<button
	on:click={() => {
		goto(target);
	}}
	class="flex flex-row"
>
	<p>ต่อไป</p>
	<ArrowRight />
</button>
