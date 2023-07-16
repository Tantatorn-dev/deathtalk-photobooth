<script>
	import Button from '../components/Button.svelte';

	let screenWidth = 0;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	<p>Please use mobile device</p>
{:else}
	<div class="flex flex-col gap-3 ml-8 mr-8 mt-8">
		<p class="text-primary text-5xl">Death Talk</p>
		<p class="text-4xl">ความตาย<br />และชีวิต</p>
		<p class="text-2xl">สำรวจความตาย<br />ฝึกฝนการปล่อยวาง<br />วางแผนการส่งต่อสิ่งสำคัญ</p>
		<div class="flex flex-col w-full justify-end h-64">
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
