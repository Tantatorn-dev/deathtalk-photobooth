<script lang="ts">
	import FadeWrapper from '../../components/common/FadeWrapper.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import SplashText from '../../components/common/SplashText.svelte';
</script>

<div class="relative w-full h-full">
	<FadeWrapper>
		<div class="flex flex-col gap-3 ml-4 mr-4">
			<img src="/deathtalk.svg" alt="family" class="mt-5 mb-5 ml-auto mr-auto" />
			<SplashText className="text-3xl text-center">คำเตือน</SplashText>
			<p class="mt-4 text-xs text-center">
				เว็บไซต์นี้มีเนื้อหาเกี่ยวกับความตาย หากคุณรู้สึกไม่โอเค <br /> “สามารถหยุดเล่นได้ตลอดเวลา”
			</p>
			<div class="flex flex-row justify-center mt-20">
				<NextButton target="/photo" />
			</div>
		</div>
	</FadeWrapper>
	<img src="/misc/sun.svg" alt="family" class="absolute bottom-48 right-20" />
	<img src="/misc/mountain.svg" alt="family" class="absolute bottom-0 right-0" />
</div>
