<script lang="ts">
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
				<Question question="1. ประสบการณ์เหล่านั้น ทำให้คุณแข็งแกร่งขึ้นไหม?" name="c1" />
				<Question
					question="2. ประสบการณ์เหล่านั้น ทำให้คุณเริ่มประเมินได้ว่าอะไรสำคัญ / ไม่สำคัญในชีวิต?"
					name="c2"
				/>
				<div class="flex justify-end">
					<NextButton
						disabled={!isAllAnswered(answersValue, ['c1', 'c2'])}
						onClick={() => {
							index = 1;
						}}
					/>
				</div>
			{:else if index == 1}
				<Question question="3. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจความตายมากขึ้น?" name="c3" />
				<Question question="4. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจตัวเองมากขึ้น?" name="c4" />
				<div class="flex justify-end">
					<NextButton disabled={!isAllAnswered(answersValue, ['c3', 'c4'])} target="/explore/4" />
				</div>
			{/if}
		</div>
	</div>
	<img src="/misc/ambulance.svg" class="absolute bottom-0 left-0" alt="ambulance" />
</div>
