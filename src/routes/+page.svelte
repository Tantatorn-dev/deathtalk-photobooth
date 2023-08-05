<script lang="ts">
	import NextButton from '../components/common/NextButton.svelte';
	import SplashText from '../components/common/SplashText.svelte';
</script>

<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
	<p class="text-4xl text-center">ยินดีต้อนรับสู่ <br /></p>
	<SplashText className="text-4xl text-center p-1 pb-2">Death Talk</SplashText>
	<p class="mt-8 font-light text-center">คุณเตรียมพร้อมสำหรับ <br> “ความตาย” มากน้อยขนาดไหน?</p>
	<div class="flex flex-col justify-end h-72">
		<div class="flex flex-row justify-center">
			<NextButton target="/disclaimer" />
		</div>
	</div>
</div>
