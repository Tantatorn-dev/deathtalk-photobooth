<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../../components/common/FadeWrapper/useFade';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import { answers, type Answer } from '../../../store';
	import { isAllAnswered } from '../../../utils/score';

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/explore/thanks`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper {isShow} className="flex flex-col gap-3 ml-8 mr-8">
	<img src="/vine/vine_1.svg" class="w-24 -mb-6 -ml-10" alt="vine" />
	<Header chapter={5} title="การเข้าถึงความช่วยเหลือ" />
	<div class="flex flex-col gap-5 mt-10">
		<Question question="1. คุณรู้จักคนที่สามารถช่วยฉันเข้าถึงการสนับสนุนจากชุมชน?" name="e1" />
		<Question question="2. คุณรู้จักคนที่ให้การดูแลผู้ป่วยที่กำลังจะตายในแต่ละวัน?" name="e2" />
		<Question question="3. คุณสามารถเข้าถึงอุปกรณ์ที่จำเป็นสำหรับการดูแล?" name="e3" />
		<Question question="4. คุณสามารถเข้าถึงการสนับสนุนที่เหมาะสมทางวัฒนธรรม?" name="e4" />
		<Question question="5. คุณสามารถเข้าถึงการสนับสนุนทางอารมณ์สำหรับตัวเอง?" name="e5" />
		<div class="flex justify-end">
			<NextButton
				disabled={!isAllAnswered(answersValue, ['e1', 'e2', 'e3', 'e4', 'e5'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/vine/vine_2.svg" class="w-24 ml-auto" alt="vine" />
</FadeWrapper>
