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

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/explore/4`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper className="flex flex-col gap-3 ml-8 mr-8" {isShow}>
	<div class="mt-5">
		<Header
			chapter={3}
			title="ประสบการณ์ต่าง ๆ"
			subtitle="ประสบการณ์เกี่ยวกับความตาย เช่น การสูญเสียของคนรอบข้าง"
		/>
	</div>
	<div class="flex flex-col gap-10 mt-10">
		<Question question="1. ประสบการณ์เหล่านั้น ทำให้คุณแข็งแกร่งขึ้นไหม?" name="c1" />
		<Question
			question="2. ประสบการณ์เหล่านั้น ทำให้คุณเริ่มประเมินได้ว่าอะไรสำคัญ / ไม่สำคัญในชีวิต?"
			name="c2"
		/>
		<Question question="3. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจความตายมากขึ้น?" name="c3" />
		<Question question="4. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจตัวเองมากขึ้น?" name="c4" />
		<div class="flex justify-end">
			<NextButton
				disabled={!isAllAnswered(answersValue, ['c1', 'c2', 'c3', 'c4'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/misc/ambulance.svg" class="w-full h-56 -ml-32" alt="ambulance" in:fade />
</FadeWrapper>
