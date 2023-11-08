<script>
	import '../app.css';

	let screenWidth = 0;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=IBM+Plex+Sans+Thai+Looped:wght@300;400;600;700&display=swap"
		rel="stylesheet"
	/>

	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-PKFZMN4J');
	</script>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<div class="app-container app-bg">
	<slot />
</div>

<noscript
	><iframe
		title="Google Tag Manager"
		src="https://www.googletagmanager.com/ns.html?id=GTM-PKFZMN4J"
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	/></noscript
>


<style lang="postcss">
	.app-bg {
		@apply bg-[url('/bg.png')] bg-cover bg-center;
	}

	:global(body) {
		@apply h-[100dvh] w-[100dvw] overflow-auto;
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
