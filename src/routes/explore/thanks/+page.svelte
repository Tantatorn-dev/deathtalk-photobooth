<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';

	setTimeout(() => {
		isShow = false;

		setTimeout(() => {
			goto('/result');
		}, 1500);
	}, 2000);

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);
</script>

<FadeWrapper {isShow} className="relative w-full h-full">
	<div class="flex items-center justify-center h-full">
		<p>ขอบคุณที่มาสำรวจตัวเองนะ</p>
	</div>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/rose.svg" alt="family" class="ml-auto mr-auto" />
	</div>
</FadeWrapper>
