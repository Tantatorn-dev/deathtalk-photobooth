<script lang="ts">
	import { goto } from '$app/navigation';
	import SplashText from '../../components/common/SplashText.svelte';
	import FacebookShareButton from '../../components/result/FacebookShareButton.svelte';
	import FrameSelector from '../../components/result/FrameSelector.svelte';
	import { answers } from '../../store';
	import { calculateScore, determineGrade } from '../../utils/score';

	let score = 0;
	let grade = 4;
	answers.subscribe((value) => {
		score = calculateScore(value);
		grade = determineGrade(score);
	});

	const gradeStrMap: Record<number, string> = {
		7: 'สูงที่สุด',
		6: 'สูง',
		5: 'ค่อนข้างสูง',
		4: 'ปานกลาง',
		3: 'ค่อนข้างต่ำ',
		2: 'ต่ำ',
		1: 'ต่ำที่สุด'
	};
</script>

<div class="flex flex-col justify-between w-full h-full">
	<div class="flex flex-col gap-3 pt-10">
		<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl"
			>ผลลัพธ์และของที่ระลึก</SplashText
		>
		<p class="mt-1 font-bold text-center">คุณมีการรู้เท่าทันความตายได้ระดับ {grade}</p>
		<p class="pl-6 pr-6 text-xs text-center">
			คุณถือว่ามีความรู้ด้านการรู้เท่าทันความตายในระดับ {gradeStrMap[grade]}
		</p>
		<FrameSelector />
		<p class="text-sm text-center">ร่วมแบ่งปันเรื่องราวของคุณผ่าน <br /> #deathtalkth</p>
		<div class="flex justify-center mt-10 mb-10">
			<FacebookShareButton />
		</div>
	</div>
	<button
		on:click={() => {
			goto('https://facebook.com/DeathTalkative');
		}}
		class="about-us-btn">เกี่ยวกับเรา</button
	>
</div>

<style lang="postcss">
	.about-us-btn {
		@apply w-full pt-4 pb-4 mt-auto text-white bg-black;
	}
</style>
