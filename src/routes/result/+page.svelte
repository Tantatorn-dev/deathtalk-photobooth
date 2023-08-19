<script>
	import { goto } from '$app/navigation';
	import SplashText from '../../components/common/SplashText.svelte';
	import FacebookShareButton from '../../components/result/FacebookShareButton.svelte';
	import FrameSelector from '../../components/result/FrameSelector.svelte';
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col gap-3 pt-10">
		<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl"
			>ผลลัพธ์และของที่ระลึก</SplashText
		>
		<p class="mt-1 font-bold text-center">คุณมีการรู้เท่าทันความตายได้ระดับ 3</p>
		<p class="pl-6 pr-6 text-xs text-center">
			คุณถือว่ามีความรู้ด้านการรู้เท่าทันความตายในระดับ ค่อนข้างน้อย
		</p>
		<FrameSelector />
		<p class="text-sm text-center">ร่วมแบ่งปันเรื่องราวของคุณผ่าน <br /> #deathtalkth</p>
		<div class="flex justify-center mt-10">
			<FacebookShareButton />
		</div>
	</div>
	<button on:click={()=>{
		goto('https://facebook.com/DeathTalkative')
	}} class="absolute bottom-0 w-full pt-4 pb-4 text-white bg-black">เกี่ยวกับเรา</button>
</div>
