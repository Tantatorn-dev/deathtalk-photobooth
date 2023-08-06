<div class="container">
	<img src="/vine/vine_1.svg" class="vine1" alt="vine" />
	<slot />
	<img src="/vine/vine_2.svg" class="vine2" alt="vine" />
</div>

<style lang="postcss">
	.container {
		@apply relative w-full h-full;
	}

	.vine1 {
		@apply fixed top-0 left-0;
	}

	.vine2 {
		@apply fixed bottom-0 right-0;
	}

	@media (min-width: 768px) {
		.vine1 {
			@apply absolute top-0 left-0;
		}

		.vine2 {
			@apply absolute bottom-0 right-0;
		}
	}
</style>
