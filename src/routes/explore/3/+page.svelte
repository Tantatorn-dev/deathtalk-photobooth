<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
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

	const { isShowStore: isShow1Store, enhanceCallback: callback1 } = useFade(() => {
		index++;
	});

	isShow1Store.subscribe((value) => {
		isShow1 = value;
	});

	let isShow2 = false;

	const { isShowStore: isShow2Store, enhanceCallback: callback2 } = useFade(() => {
		goto('/explore/4');
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
				chapter={3}
				title="ประสบการณ์ต่าง ๆ"
				subtitle="ประสบการณ์เกี่ยวกับความตาย เช่น การสูญเสียของคนรอบข้าง"
			/>
		</div>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow1}>
					<Question question="1. ประสบการณ์เหล่านั้น ทำให้คุณแข็งแกร่งขึ้นไหม?" name="c1" />
					<Question
						question="2. ประสบการณ์เหล่านั้น ทำให้คุณเริ่มประเมินได้ว่าอะไรสำคัญ / ไม่สำคัญในชีวิต?"
						name="c2"
					/>
					<div class="flex justify-end">
						<NextButton disabled={!isAllAnswered(answersValue, ['c1', 'c2'])} onClick={callback1} />
					</div>
				</FadeWrapper>
			{:else if index == 1}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow2}>
					<Question question="3. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจความตายมากขึ้น?" name="c3" />
					<Question question="4. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจตัวเองมากขึ้น?" name="c4" />
					<div class="flex justify-end">
						<NextButton disabled={!isAllAnswered(answersValue, ['c3', 'c4'])} onClick={callback2} />
					</div>
				</FadeWrapper>
			{/if}
		</div>
	</div>
	{#if isShowImg}
		<img src="/misc/ambulance.svg" class="absolute bottom-0 left-0" alt="ambulance" in:fade />
	{/if}
</div>
