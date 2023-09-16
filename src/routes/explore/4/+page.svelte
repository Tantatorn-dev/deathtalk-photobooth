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
		<Question question="1. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน?" name="d1" />
		<Question question="2. คุณมั่นใจว่าต้องเตรียมเอกสารอะไรบ้างในการวางแผนการตาย?" name="d2" />
		<Question
			question="3. คุณรู้วิธีจัดการระบบการดูแลสุขภาพเพื่อสนับสนุนผู้ป่วยที่กำลังจะตาย?"
			name="d3"
		/>
		<Question question="4. คุณรู้วิธีการเข้าถึงการดูแลแบบประคับประคองในพื้นที่ของคุณ?" name="d4" />
		<Question question="5. คุณรู้วิธีจัดการพิธีศพและทางเลือกต่าง ๆ แค่ไหน ?" name="d5" />
		<Question
			question="6. คุณมีความเข้าใจเพียงพอเกี่ยวกับวิถีการเจ็บป่วยเพื่อใช้ประกอบการตัดสินใจเกี่ยวกับการรักษาทางการแพทย์ที่มีอยู่ และวิธีที่จะกำหนดคุณภาพชีวิตในบั้นปลาย?"
			name="d6"
		/>
		<Question
			question="7. คุณรู้เกี่ยวกับการบริจาคที่เจ้าหน้าที่สุสานสามารถทำได้เมื่อสิ้นสุดอายุขัย?"
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
