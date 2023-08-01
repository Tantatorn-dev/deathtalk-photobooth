<script lang="ts">
	import { goto } from '$app/navigation';
	import SplashText from '../components/common/SplashText.svelte';
	import FingerprintButton from '../components/intro/FingerprintButton.svelte';
</script>

<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
	<p class="text-4xl text-center">ยินดีต้อนรับสู่ <br /></p>
	<SplashText className="text-4xl text-center">Death Talk</SplashText>
	<p class="mt-8 font-light text-center">คุณเตรียมพร้อมสำหรับ “ความตาย” มากน้อยขนาดไหน?</p>
	<div class="flex flex-col justify-end h-72">
		<div class="flex flex-row justify-end">
			<FingerprintButton
				onClick={() => {
					goto('/disclaimer');
				}}>แตะหน้าจอเพื่อไปต่อ</FingerprintButton
			>
		</div>
	</div>
</div>
