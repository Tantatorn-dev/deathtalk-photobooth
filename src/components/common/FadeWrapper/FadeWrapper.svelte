<script>
	import { fade } from 'svelte/transition';

	export let isShow = false;
	export let className = '';
</script>

{#if isShow}
	<div class={className} in:fade out:fade>
		<slot />
	</div>
{/if}
