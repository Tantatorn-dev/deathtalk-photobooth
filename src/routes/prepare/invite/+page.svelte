<script lang="ts">
	import { goto } from '$app/navigation';
	import BackButton from '../../../components/common/BackButton.svelte';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import NextButton from '../../../components/common/NextButton.svelte';
	import SponsorBy from '../../../components/intro/SponsorBy.svelte';

	const { isShowStore, enhanceCallback } = useFade(() => goto('/result'));

	const toRegister = () => {
		goto(
			'https://docs.google.com/forms/d/e/1FAIpQLSfvCN45zZkie_YThhWXn9q1_jmN3-iIgxSueXrsbm-45E-zBQ/viewform?usp=sf_link'
		);
	};

	let isShow = false;
	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<div class="relative w-full h-full">
	<FadeWrapper {isShow}>
		<div class="flex flex-col gap-3 ml-8 mr-8">
			<p class="mt-20 text-2xl text-center">กิจกรรมพิเศษ</p>
			<p class="mt-8 font-light text-center">
				เรากำลังจะมีโปรเจกต์สำหรับคนที่สนใจการตระหนักรู้เรื่องความตาย (Death Awareness)
			</p>
			<p class="mt-4 font-light text-center">
				หากคุณสนใจและยินดีร่วมเป็นส่วนหนึ่งในโปรเจกต์สามารถลงชื่อได้เลย
			</p>
			<div class="flex flex-row justify-between mt-10">
				<BackButton onClick={enhanceCallback} />
				<NextButton label="สนใจ" onClick={toRegister} />
			</div>
		</div>
	</FadeWrapper>
	<img src="/misc/sun.svg" alt="family" class="absolute bottom-56 right-20" />
	<img src="/misc/mountain.svg" alt="family" class="absolute right-0 w-full bottom-10" />
	<div class="absolute bottom-0 flex justify-center w-full mt-2 mb-2">
		<SponsorBy />
	</div>
</div>
