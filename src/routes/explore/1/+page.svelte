<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../../components/common/FadeWrapper/FadeWrapper.svelte';
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

	$: if (index == 0) {
		setTimeout(() => {
			isShow1 = true;
		}, 1000);
	}

	let isShow2 = false;

	$: if (index == 1) {
		setTimeout(() => {
			isShow2 = true;
		}, 1000);
	}

	let isShowImg = false;

	setTimeout(() => {
		isShowImg = true;
	}, 1000);
</script>

<div class="relative w-full h-full">
	<div class="z-20 flex flex-col gap-3 ml-8 mr-8">
		<div class="mt-5">
			<Header
				chapter={1}
				title="การพูดคุยเกี่ยวกับความตาย"
				subtitle="ความสามารถในการพูดเรื่องความตายกับคนรอบข้าง"
			/>
		</div>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow1}>
					<Question question="1. คุณกล้าพูดเรื่องความตายกับเพื่อนสนิทมากแค่ไหน?" name="a1" />
					<Question question="2. คุณกล้าพูดเรื่องความตายกับเด็กมากแค่ไหน?" name="a2" />
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['a1', 'a2'])}
							onClick={() => {
								isShow1 = false;

								setTimeout(() => {
									index = 1;
								}, 1000);
							}}
						/>
					</div>
				</FadeWrapper>
			{:else if index == 1}
				<FadeWrapper className="flex flex-col gap-3" isShow={isShow2}>
					<Question question="3. คุณพูดเรื่องความตายกับเพื่อนสนิท?" name="a3" />
					<Question question="4. คุณพูดเรื่องความตายกับเด็ก?" name="a4" />
					<div class="flex justify-end">
						<NextButton
							disabled={!isAllAnswered(answersValue, ['a3', 'a4'])}
							onClick={() => {
								isShow2 = false;

								setTimeout(() => {
									goto('/explore/2');
								}, 1000);
							}}
						/>
					</div>
				</FadeWrapper>
			{/if}
		</div>
	</div>
	{#if isShowImg}
		<img src="/misc/family.svg" alt="family" class="absolute bottom-0 z-10 w-full" in:fade />
	{/if}
</div>
