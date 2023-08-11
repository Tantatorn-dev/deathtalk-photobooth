<script>
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';

	let index = 0;
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
		<Header
			chapter={3}
			title="ประสบการณ์ต่าง ๆ"
			subtitle="ประสบการณ์เกี่ยวกับความตาย เช่น การสูญเสียของคนรอบข้าง"
		/>
		<div class="flex flex-col gap-10 mt-10">
			{#if index == 0}
				<Question question="1. ประสบการณ์เหล่านั้น ทำให้คุณแข็งแกร่งขึ้นไหม?" />
				<Question
					question="2. ประสบการณ์เหล่านั้น ทำให้คุณเริ่มประเมินได้ว่าอะไรสำคัญ / ไม่สำคัญในชีวิต?"
				/>
				<div class="flex justify-end">
					<NextButton
						onClick={() => {
							index = 1;
						}}
					/>
				</div>
			{:else if index == 1}
				<Question question="3. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจความตายมากขึ้น?" />
				<Question question="4. ประสบการณ์เหล่านั้นทำให้คุณเข้าใจตัวเองมากขึ้น?" />
				<div class="flex justify-end">
					<NextButton target="/explore/4" />
				</div>
			{/if}
		</div>
	</div>
	<img src="/misc/ambulance.svg" class="absolute left-0 bottom-20" alt="ambulance" />
</div>
