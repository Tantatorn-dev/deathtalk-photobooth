<script lang="ts">
	import NextButton from '../components/common/NextButton.svelte';
	import SplashText from '../components/common/SplashText.svelte';
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col gap-3 ml-8 mr-8">
		<p class="mt-20 text-4xl text-center">ยินดีต้อนรับสู่ <br /></p>
		<SplashText className="text-4xl text-center p-1 pb-2">Death Talk</SplashText>
		<p class="mt-8 font-light text-center">คุณเตรียมพร้อมสำหรับ <br /> “ความตาย” มากน้อยขนาดไหน?</p>
		<div class="flex flex-row justify-center mt-10">
			<NextButton target="/disclaimer" />
		</div>
	</div>
	<img src="/misc/sun.svg" alt="family" class="absolute bottom-48 right-20" />
	<img src="/misc/mountain.svg" alt="family" class="absolute bottom-0 right-0" />
</div>
