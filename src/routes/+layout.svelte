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

<slot />

<style lang="postcss">
	@media (min-width: 768px) {
		:global(body) {
			@apply w-[480px] h-[800px] border border-slate-400;
		}
	}

	:global(body) {
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
	}

	:global(html) {
		background-color: theme(colors.secondary);
		color: theme(colors.black);
	}
</style>
