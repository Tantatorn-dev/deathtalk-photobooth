<script>
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';

	let index = 0;
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
		<Header
			chapter={1}
			title="การพูดคุยเกี่ยวกับความตาย"
			subtitle="ความสามารถในการพูดเรื่องความตายกับคนรอบข้าง"
		/>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<Question question="1. คุณกล้าพูดเรื่องความตายกับเพื่อนสนิทมากแค่ไหน?" />
				<Question question="2. คุณกล้าพูดเรื่องความตายกับเด็กมากแค่ไหน?" />
				<div class="flex justify-end">
					<NextButton
						onClick={() => {
							index = 1;
						}}
					/>
				</div>
			{:else if index == 1}
				<Question question="3. คุณพูดเรื่องความตายกับเพื่อนสนิท?" />
				<Question question="4. คุณพูดเรื่องความตายกับเด็ก?" />
				<div class="flex justify-end">
					<NextButton target="/explore/2" />
				</div>
			{/if}
		</div>
	</div>
	<img src="/misc/family.svg" alt="family" class="absolute w-full bottom-20" />
</div>
