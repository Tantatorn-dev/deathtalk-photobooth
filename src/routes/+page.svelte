<script>
	let screenWidth = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	Please use mobile device
{:else}
	Hello Deathtalk
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
