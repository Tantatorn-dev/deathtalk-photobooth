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
	:global(body) {
		@apply bg-[url('/bg.png')] bg-cover bg-center;
		@apply h-[100vh] w-[100vw] overflow-auto;
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
	}

	@media (min-width: 768px) {
		:global(body) {
			@apply bg-[url('/bg.png')] bg-cover bg-center;
			@apply w-[390px] h-[844px] border border-slate-400 overflow-auto;
		}
	}

	:global(html) {
		background-color: theme(colors.secondary);
		color: theme(colors.black);
	}
</style>
