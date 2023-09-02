<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import { answers, type Answer } from '../../../store';
	import { isAllAnswered } from '../../../utils/score';

	let index = 0;

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow1 = false;

	$: if (index == 0) {
		setTimeout(() => {
			isShow1 = true;
		}, 1000);
	}

	let isShow2 = false;

	$: if (index == 1) {
		setTimeout(() => {
			isShow2 = true;
		}, 1000);
	}

	let isShowImg = false;

	setTimeout(() => {
		isShowImg = true;
	}, 1000);
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col gap-3 ml-8 mr-8">
		<div class="mt-5">
			<Header
				chapter={2}
				title="การช่วยเหลือผู้ป่วย"
				subtitle="ความสามารถของคุณหากอยู่ในบทบาทที่ต้องช่วยเหลือผู้ป่วย"
			/>
		</div>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow1}>
					<Question question="1. คุณสามารถหาอาหารหรือป้อนอาหารให้พวกเขาได้ไหม?" name="b1" />
					<Question question="2. คุณสามารถอาบน้ำให้เขาได้ไหม?" name="b2" />
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['b1', 'b2'])}
							onClick={() => {
								isShow1 = false;

								setTimeout(() => {
									index = 1;
								}, 1000);
							}}
						/>
					</div>
				</FadeWrapper>
			{:else if index == 1}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow2}>
					<Question question="3. คุณสามารถยกหรือเคลื่อนย้ายพวกเขาได้ไหม?" name="b3" />
					<Question question="4. คุณสามารถฉีดยาให้พวกเขาได้ไหม?" name="b4" />
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['b3', 'b4'])}
							onClick={() => {
								isShow2 = false;

								setTimeout(() => {
									goto('/explore/3');
								}, 1000);
							}}
						/>
					</div>
				</FadeWrapper>
			{/if}
		</div>
	</div>
	<div class="absolute bottom-0 z-10 w-full">
		{#if isShowImg}
			<img src="/misc/rose.svg" class="ml-auto mr-auto" alt="rose" in:fade />
		{/if}
	</div>
</div>
