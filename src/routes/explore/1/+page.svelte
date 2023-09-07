<script lang="ts">
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import { answers, type Answer } from '../../../store';
	import { isAllAnswered } from '../../../utils/score';
	import useFade from '../../../components/common/FadeWrapper/useFade';

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	let isShow = false;

	const { isShowStore, enhanceCallback } = useFade(() => {
		goto(`/explore/2`);
	});

	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper {isShow} className="z-20 flex flex-col gap-3 ml-8 mr-8">
	<div class="mt-5">
		<Header
			chapter={1}
			title="การพูดคุยเกี่ยวกับความตาย"
			subtitle="ความสามารถในการพูดเรื่องความตายกับคนรอบข้าง"
		/>
	</div>
	<div class="flex flex-col gap-10 mt-10">
		<Question question="1. คุณกล้าพูดเรื่องความตายกับเพื่อนสนิทมากแค่ไหน?" name="a1" />
		<Question question="2. คุณกล้าพูดเรื่องความตายกับเด็กมากแค่ไหน?" name="a2" />
		<Question question="3. คุณพูดเรื่องความตายกับเพื่อนสนิท?" name="a3" />
		<Question question="4. คุณพูดเรื่องความตายกับเด็ก?" name="a4" />
		<div class="flex justify-end">
			<NextButton
				disabled={!isAllAnswered(answersValue, ['a1', 'a2', 'a3', 'a4'])}
				onClick={enhanceCallback}
			/>
		</div>
	</div>
	<img src="/misc/family.svg" alt="family" class="w-full" in:fade />
</FadeWrapper>
