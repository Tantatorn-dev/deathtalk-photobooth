<script lang="ts">
	import { goto } from '$app/navigation';
	import BackButton from '../../../components/common/BackButton.svelte';
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
	<Header chapter={5} title="การเข้าถึงความช่วยเหลือ" subtitle="ถ้าคุณต้องดูแลผู้ป่วยระยะสุดท้าย คุณรู้ว่าจะเข้าถึงผู้คนต่อไปนี้ได้อย่างไร" />
	<div class="flex flex-col gap-5 mt-10">
		<Question question="1. คุณสามารถเข้าถึงองค์กรที่ช่วยเหลือด้านการดูแลผู่ป่วยระยะสุดท้าย" name="e1" />
		<Question question="2. คุณรู้จักองค์กรที่รับดูแลผู้ป่วยระยะสุดท้าย" name="e2" />
		<Question question="3. คุณสามารถเข้าถึงอุปกรณ์ที่จำเป็นต้องใช้ในการดูแลผู้ป่วยระยะสุดท้าย" name="e3" />
		<Question question="4. คุณสามารถเข้าถึงการดูแลผู้ป่วยระยะสุดท้ายในรูปแบบที่เหมาะสมตามวัฒนธรรมของคุณ" name="e4" />
		<Question question="5. คุณสามารถเข้าถึงองค์กรที่ดูแลอารมณ์และจิตใจของคุณ จากการที่ต้องดูแลผู้ป่วยระยะสุดท้าย" name="e5" />
		<div class="flex justify-between">
			<BackButton onClick={() => goto(`/explore/4`)} />
			<NextButton
				disabled={!isAllAnswered(answersValue, ['e1', 'e2', 'e3', 'e4', 'e5'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/vine/vine_2.svg" class="w-24 ml-auto" alt="vine" />
</FadeWrapper>
