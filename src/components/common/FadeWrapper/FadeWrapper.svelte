<script>
	import { fade } from 'svelte/transition';

	export let isShow = false;
</script>

{#if isShow}
	<div in:fade out:fade>
		<slot />
	</div>
{/if}
