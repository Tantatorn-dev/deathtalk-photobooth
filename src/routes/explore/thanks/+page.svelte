<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import NextButton from '../../../components/common/NextButton.svelte';

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/result`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper {isShow} className="relative w-full h-full">
	<div class="flex flex-col items-center justify-center h-full">
		<p class="text-center">
			ขอบคุณที่มาสำรวจตัวเองนะ<br />
			ผลการทำแบบทดสอบพร้อมแล้ว
		</p>
		<div class="mt-10">
			<NextButton onClick={enhanceCallback} label="คลิกเพื่อดูผลลัพธ์" />
		</div>
	</div>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/rose.svg" alt="family" class="ml-auto mr-auto" />
	</div>
</FadeWrapper>
