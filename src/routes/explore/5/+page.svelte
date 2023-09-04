<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import VineFrame from '../../../components/frame/VineFrame.svelte';
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
		goto('/explore/thanks');
	});

	isShow2Store.subscribe((value) => {
		isShow2 = value;
	});
</script>

<VineFrame hideVine2={index === 1}>
	<div class="flex flex-col gap-3 ml-8 mr-8">
		<div class="mt-5">
			<Header chapter={5} title="การเข้าถึงความช่วยเหลือ" />
		</div>
		<div class="flex flex-col gap-5 mt-10">
			{#if index == 0}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow1}>
					<Question
						question="1. คุณรู้จักคนที่สามารถช่วยฉันเข้าถึงการสนับสนุนจากชุมชน?"
						name="e1"
					/>
					<Question
						question="2. คุณรู้จักคนที่ให้การดูแลผู้ป่วยที่กำลังจะตายในแต่ละวัน?"
						name="e2"
					/>
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['e1', 'e2'])}
							onClick={callback1}
						/>
					</div>
				</FadeWrapper>
			{:else if index == 1}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow2}>
					<Question question="3. คุณสามารถเข้าถึงอุปกรณ์ที่จำเป็นสำหรับการดูแล?" name="e3" />
					<Question question="4. คุณสามารถเข้าถึงการสนับสนุนที่เหมาะสมทางวัฒนธรรม?" name="e4" />
					<Question question="5. คุณสามารถเข้าถึงการสนับสนุนทางอารมณ์สำหรับตัวเอง?" name="e5" />
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['e3', 'e4', 'e5'])}
							onClick={callback2}
						/>
					</div>
				</FadeWrapper>
			{/if}
		</div>
	</div>
</VineFrame>
