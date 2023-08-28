<script>
	import { fade } from 'svelte/transition';

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);
</script>

{#if isShow}
	<div in:fade out:fade>
		<slot />
	</div>
{/if}
