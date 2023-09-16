<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../components/common/FadeWrapper/useFade';
	import NextButton from '../../components/common/NextButton.svelte';
	import SplashText from '../../components/common/SplashText.svelte';
	import SponsorBy from '../../components/intro/SponsorBy.svelte';

	const {isShowStore, enhanceCallback} = useFade(()=>goto('/photo'));

	let isShow = false;
	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<div class="relative w-full h-full">
	<FadeWrapper {isShow}>
		<div class="flex flex-col gap-3 ml-4 mr-4">
			<img src="/deathtalk.svg" alt="family" class="mt-5 mb-5 ml-auto mr-auto" />
			<SplashText className="text-3xl text-center">คำเตือน</SplashText>
			<p class="mt-4 text-xs text-center">
				เว็บไซต์นี้มีเนื้อหาเกี่ยวกับความตาย หากคุณรู้สึกไม่โอเค <br /> “สามารถหยุดเล่นได้ตลอดเวลา”
			</p>
			<div class="flex flex-row justify-center mt-20">
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
