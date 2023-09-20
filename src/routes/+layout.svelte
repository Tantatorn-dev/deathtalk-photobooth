<script>
	import { browser } from '$app/environment';
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

<div class="app-container app-bg">
	<slot />
</div>

<style lang="postcss">
	.app-bg {
		@apply bg-[url('/bg.png')] bg-cover bg-center;
	}

	:global(body) {
		@apply h-[100vh] w-[100vw] overflow-auto;
		font-family: 'IBM Plex Sans Thai Looped', sans-serif;
	}

	.app-container {
		@apply w-full h-full border border-slate-400 overflow-auto;
	}

	@media (min-width: 768px) {
		.app-container {
			@apply w-[390px] h-[844px] border border-slate-400 overflow-auto;
		}
	}

	:global(html) {
		background-color: theme(colors.secondary);
		color: theme(colors.black);
	}
</style>
