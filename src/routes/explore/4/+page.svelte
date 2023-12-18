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
		goto(`/explore/5`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper {isShow} className="flex flex-col gap-3 ml-8 mr-8">
	<img src="/vine/vine_1.svg" class="w-24 -mb-6 -ml-10" alt="vine" />
	<Header chapter={4} title="ประเมินความรู้ต่าง ๆ" subtitle="ความรู้ต่างๆเกี่ยวกับความตาย" />
	<div class="flex flex-col gap-10 mt-10">
		<Question question="1. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน" name="d1" />
		<Question question="2. คุณทราบว่าต้องเตรียมเอกสารอะไรบ้างในการวางแผนการตาย" name="d2" />
		<Question
			question="3. คุณรู้วิธีดูแลสุขภาพของผู้ป่วยระยะสุดท้าย"
			name="d3"
		/>
		<Question question="4. คุณรู้ว่าจะเข้าถึงการดูแลแบบประคับประคองได้อย่างไร" name="d4" />
		<Question question="5. คุณรู้วิธีการจัดการงานศพ หรือทางเลือกที่เกี่ยวข้องอื่น" name="d5" />
		<Question
			question="6. คุณเข้าใจทางเลือกทางการแพทย์ในการรักษาหรือดูแลในฐานะผู้ป่วยระยะสุดท้าย"
			name="d6"
		/>
		<Question
			question="7. คุณรู้วิธีการจัดการส่งต่อสิ่งของของตัวเองหลังจากไป"
			name="d7"
		/>
		<div class="flex justify-between">
			<BackButton onClick={() => goto(`/explore/3`)} />
			<NextButton
				disabled={!isAllAnswered(answersValue, ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/vine/vine_2.svg" class="w-24 ml-auto" alt="vine" />
</FadeWrapper>
