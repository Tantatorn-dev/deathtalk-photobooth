<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import { answers, type Answer } from '../../../store';
	import { isAllAnswered } from '../../../utils/score';
	import useFade from '../../../components/common/FadeWrapper/useFade';

	let index = 0;

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow1 = false;

	const { isShowStore: isShow1Store, enhanceCallback: callback1 } = useFade(() => {
		index++;
	});

	isShow1Store.subscribe((value) => {
		isShow1 = value;
	});


	let isShow2 = false;

	const { isShowStore: isShow2Store, enhanceCallback: callback2 } = useFade(() => {
		goto('/explore/3');
	});

	isShow2Store.subscribe((value) => {
		isShow2 = value;
	});

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
							onClick={callback1}
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
							onClick={callback2}
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
