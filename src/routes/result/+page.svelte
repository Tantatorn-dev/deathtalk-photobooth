<script>
	import SplashText from '../../components/common/SplashText.svelte';
	import FrameSelector from '../../components/result/FrameSelector.svelte';
</script>

<div class="flex flex-col gap-3 pt-10 ml-4 mr-4">
	<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl">ผลลัพธ์และของที่ระลึก</SplashText>
	<p class="mt-1 font-bold text-center">
		คุณมีการรู้เท่าทันความตายได้ระดับ 3
	</p>
	<p class="pl-6 pr-6 text-xs text-center">
		คุณถือว่ามีความรู้ด้านการรู้เท่าทันความตายในระดับ
		ค่อนข้างน้อย
	</p>
	<FrameSelector />
</div>
