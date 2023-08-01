<script>
	import '../app.css';

	let screenWidth = 0;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300;400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	<p>Please use mobile device</p>
{:else}
	<slot />
{/if}

<style lang="postcss">
	:global(body) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
	}

	:global(html) {
		background-color: theme(colors.white);
		color: theme(colors.black);
	}

	.text-splash {
		background-image: url('/splash_bg.png');
	}
</style>
