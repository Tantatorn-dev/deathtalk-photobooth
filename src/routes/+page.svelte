<script>
	import ImageUploader from '../components/ImageUploader.svelte';
	import Button from '../components/Button.svelte';

	let screenWidth = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	Please use mobile device
{:else}
	<div class="text-center mt-4">
		<Button text="คลิกที่นี่เพื่อเริ่มเล่น" />
	</div>
	<ImageUploader />
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black);
	}
</style>
