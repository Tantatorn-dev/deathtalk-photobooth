<script lang="ts">
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import { answers, type Answer } from '../../../store';
	import { isAllAnswered } from '../../../utils/score';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import { goto } from '$app/navigation';
	import BackButton from '../../../components/common/BackButton.svelte';

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/explore/3`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper className="flex flex-col gap-3 ml-8 mr-8" {isShow}>
	<div class="mt-16">
		<Header
			chapter={2}
			title="การช่วยเหลือผู้ป่วย"
			subtitle="ความสามารถของคุณหากอยู่ในบทบาทที่ต้องช่วยเหลือผู้ป่วย"
		/>
	</div>
	<div class="flex flex-col gap-10 mt-10">
		<Question question="1. คุณสามารถหาอาหารหรือป้อนอาหารให้พวกเขาได้ไหม?" name="b1" />
		<Question question="2. คุณสามารถอาบน้ำให้เขาได้ไหม?" name="b2" />
		<Question question="3. คุณสามารถยกหรือเคลื่อนย้ายพวกเขาได้ไหม?" name="b3" />
		<Question question="4. คุณสามารถฉีดยาให้พวกเขาได้ไหม?" name="b4" />
		<div class="flex justify-between">
			<BackButton onClick={() => goto(`/explore/1`)} />
			<NextButton
				disabled={!isAllAnswered(answersValue, ['b1', 'b2', 'b3', 'b4'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/misc/rose.svg" class="w-full h-56" alt="rose" in:fade />
</FadeWrapper>
