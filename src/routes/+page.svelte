<script>
	import Button from '../components/common/Button.svelte';

	let screenWidth = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	<p>Please use mobile device</p>
{:else}
	<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
		<p class="text-primary text-4xl text-center">ยินดีต้อนรับสู่ <br/> Death Talk</p>
		<p class="text-2xl text-center">คุณเตรียมพร้อมสำหรับ “ความตาย” มากน้อยขนาดไหน?</p>
		<div class="flex flex-col w-full justify-end h-72">
			<Button text="คลิกที่นี่เพื่อเริ่มเล่น" />
		</div>
	</div>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black);
		color: theme(colors.white);
	}
</style>
