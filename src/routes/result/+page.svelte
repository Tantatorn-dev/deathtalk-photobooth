<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
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

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);
</script>

{#if isShow}
	<div in:fade class="flex flex-col justify-between w-full h-full">
		<div class="flex flex-col gap-3 pt-10">
			<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl"
				>ผลลัพธ์และของที่ระลึก</SplashText
			>
			<p class="mt-1 font-bold text-center">คุณมีการรู้เท่าทันความตายได้ระดับ {grade}</p>
			<p class="pl-6 pr-6 text-xs text-center">
				คุณถือว่ามีความรู้ด้านการรู้เท่าทันความตายในระดับ {gradeStrMap[grade]}
			</p>
			<FrameSelector />
			<p class="text-sm text-center">
				ร่วมแบ่งปันเรื่องราวเกี่ยวกับ<br />การเตรียมพร้อมสำหรับความตาย/งานศพของคุณ ผ่าน <br /> #deathtalkความตายและชีวิต
			</p>
			<div class="flex justify-center mt-10 mb-10">
				<FacebookShareButton />
			</div>
		</div>
		<div class="flex flex-row w-full pt-4 pb-4 text-white bg-black justify-evenly">
			<a href="https://facebook.com/DeathTalkative" target="_blank">
				<button class="w-32 pt-1">เกี่ยวกับเรา</button>
			</a>
			<div class="vDivider" />
			<button
				on:click={() => {
					goto('/prepare/cta');
				}}
				class="w-32">วิธีเตรียมตัวตาย</button
			>
		</div>
	</div>
{/if}

<style lang="postcss">
	.vDivider {
		@apply w-px h-8 bg-white;
	}
</style>
