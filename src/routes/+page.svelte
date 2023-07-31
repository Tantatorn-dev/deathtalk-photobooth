<script lang="ts">
	import Button from '../components/common/Button.svelte';
	import ImageUploader from '../components/common/ImageUploader.svelte';
	import Intro from '../components/intro/Intro.svelte';

	let screenWidth = 0;

	enum IntroState {
		Welcome,
		Disclaimer,
		Portrait,
		Intro
	}

	let currentState: IntroState = IntroState.Intro;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 768}
	<p>Please use mobile device</p>
{:else if currentState === IntroState.Welcome}
	<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
		<p class="text-primary text-4xl text-center">ยินดีต้อนรับสู่ <br /> Death Talk</p>
		<p class="text-2xl text-center">คุณเตรียมพร้อมสำหรับ “ความตาย” มากน้อยขนาดไหน?</p>
		<div class="flex flex-col w-full justify-end h-72">
			<Button
				onClick={() => {
					currentState = IntroState.Disclaimer;
				}}
			>
				คลิกที่นี่เพื่อเริ่มเล่น
			</Button>
		</div>
	</div>
{:else if currentState === IntroState.Disclaimer}
	<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
		<p class="text-primary text-4xl text-center">คำเตือน</p>
		<p class="text-sm text-center">
			Lorem ipsum dolor sit amet consectetur. Hac pharetra quis in orci risus at suspendisse. Ornare
			elementum erat sed pulvinar mattis sed. Maecenas placerat tempor magna varius natoque.
			Sollicitudin varius tortor est massa sed enim.
		</p>
		<div class="flex flex-col w-full justify-end h-72">
			<Button
				onClick={() => {
					currentState = IntroState.Portrait;
				}}>ต่อไป</Button
			>
		</div>
	</div>
{:else if currentState === IntroState.Portrait}
	<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
		<ImageUploader />
	</div>
{:else if currentState === IntroState.Intro}
	<Intro />
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.black);
		color: theme(colors.white);
	}
</style>
