<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/result`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});

	setTimeout(() => {
		if (browser) enhanceCallback();
	}, 3000);
</script>

<FadeWrapper {isShow} className="relative w-full h-full">
	<div class="flex items-center justify-center h-full">
		<p>ขอบคุณที่มาสำรวจตัวเองนะ</p>
	</div>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/rose.svg" alt="family" class="ml-auto mr-auto" />
	</div>
</FadeWrapper>
