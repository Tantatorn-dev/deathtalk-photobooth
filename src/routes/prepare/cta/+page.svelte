<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import NextButton from '../../../components/common/NextButton.svelte';
	import SponsorBy from '../../../components/intro/SponsorBy.svelte';

	const { isShowStore, enhanceCallback } = useFade(() => goto('/prepare'));

	let isShow = false;
	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<div class="relative w-full h-full">
	<FadeWrapper {isShow}>
		<div class="flex flex-col gap-3 ml-8 mr-8">
			<p class="mt-20 text-2xl text-center">
				ตัวอย่าง <br />
				วิธีเตรียมตัวตาย
			</p>
			<p class="mt-8 font-light text-center">
				ถ้าคุณสงสัยว่า เราจะสามารถเตรียมพร้อม <br />
				ในเรื่องความตายอย่างไรได้บ้าง?
			</p>
			<p class="mt-4 font-light text-center">
				เราคัดเลือกตัวอย่างวิธีเตรียมตัวตายฉบับย่อ <br />
				มาให้คุณดูแบบรวบรัด ใช้เวลาเพียง 1 นาทีเท่านั้น
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
