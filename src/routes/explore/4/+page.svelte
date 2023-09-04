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
		goto('/explore/intermission');
	});

	isShow2Store.subscribe((value) => {
		isShow2 = value;
	});
</script>

<VineFrame hideVine2={true}>
	<div class="flex flex-col gap-3 ml-8 mr-8">
		<div class="mt-5">
			<Header chapter={4} title="ประเมินความรู้ต่าง ๆ" subtitle="ความรู้ต่างๆเกี่ยวกับความตาย" />
		</div>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow1}>
					<Question question="1. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน?" name="d1" />
					<Question
						question="2. คุณมั่นใจว่าต้องเตรียมเอกสารอะไรบ้างในการวางแผนการตาย?"
						name="d2"
					/>
					<Question
						question="3. คุณรู้วิธีจัดการระบบการดูแลสุขภาพเพื่อสนับสนุนผู้ป่วยที่กำลังจะตาย?"
						name="d3"
					/>
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['d1', 'd2', 'd3'])}
							onClick={callback1}
						/>
					</div>
				</FadeWrapper>
			{:else if index == 1}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow2}>
					<Question question="4. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน?" name="d4" />
					<Question question="5. คุณรู้วิธีจัดการพิธีศพและทางเลือกต่าง ๆ แค่ไหน ?" name="d5" />
					<Question
						question="6. ฉันรู้เกี่ยวกับการบริจาคที่เจ้าหน้าที่สุสานสามารถทำได้เมื่อสิ้นสุดอายุขัย?"
						name="d6"
					/>
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['d4', 'd5', 'd6'])}
							onClick={callback2}
						/>
					</div>
				</FadeWrapper>
			{/if}
		</div>
	</div>
</VineFrame>
