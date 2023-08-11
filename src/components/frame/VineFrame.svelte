<script lang="ts">
	export let hideVine1 = false;
	export let hideVine2 = false;
</script>

<div class="container">
	{#if !hideVine1}
		<img src="/vine/vine_1.svg" class="vine1" alt="vine" />
	{/if}
	<slot />
	{#if !hideVine2}
		<img src="/vine/vine_2.svg" class="vine2" alt="vine" />
	{/if}
</div>

<style lang="postcss">
	.container {
		@apply relative w-full h-full;
	}

	.vine1 {
		@apply fixed top-0 left-0 -z-10;
	}

	.vine2 {
		@apply fixed bottom-0 right-0 -z-10;
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
