<script lang="ts">
	import FadeWrapper from '../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../components/common/NextButton.svelte';
	import SplashText from '../components/common/SplashText.svelte';
	import { goto } from '$app/navigation';
	import useFade from '../components/common/FadeWrapper/useFade';
	import SponsorBy from '../components/intro/SponsorBy.svelte';

	const { isShowStore, enhanceCallback } = useFade(() => goto('/disclaimer'));

	let isShow = false;
	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<div class="relative w-full h-full">
	<FadeWrapper {isShow}>
		<div class="flex flex-col gap-3 ml-8 mr-8">
			<img src="/deathtalk.svg" alt="family" class="mt-5 mb-5 ml-auto mr-auto" />
			<p class="text-4xl text-center">ยินดีต้อนรับสู่ <br /></p>
			<SplashText className="text-4xl text-center p-1 pb-2">Death Talk</SplashText>
			<p class="mt-8 font-light text-center">
				คุณเตรียมพร้อม  <br />สำหรับ “ความตาย” แค่ไหน
			</p>
			<div class="flex flex-row justify-center mt-10">
				<NextButton onClick={enhanceCallback} />
			</div>
		</div>
	</FadeWrapper>
	<img src="/misc/sun.svg" alt="family" class="absolute bottom-56 right-20" />
	<img src="/misc/mountain.svg" alt="family" class="absolute right-0 w-full bottom-10" />
	<div class="absolute bottom-0 flex justify-center w-full mt-2 mb-2">
		<SponsorBy />
	</div>
</div>
