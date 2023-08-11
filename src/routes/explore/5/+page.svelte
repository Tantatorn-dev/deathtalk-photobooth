<script>
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';
	import VineFrame from '../../../components/frame/VineFrame.svelte';

	let index = 0;
</script>

<VineFrame hideVine2={index === 1}>
	<div class="flex flex-col gap-3 ml-8 mr-8">
		<div class="mt-5">
			<Header chapter={5} title="การเข้าถึงความช่วยเหลือ" />
		</div>
		<div class="flex flex-col gap-5 mt-10">
			{#if index == 0}
				<Question question="1. คุณรู้จักคนที่สามารถช่วยฉันเข้าถึงการสนับสนุนจากชุมชน?" />
				<Question question="2. คุณรู้จักคนที่ให้การดูแลผู้ป่วยที่กำลังจะตายในแต่ละวัน?" />
				<div class="flex justify-end">
					<NextButton
						onClick={() => {
							index = 1;
						}}
					/>
				</div>
			{:else if index == 1}
				<Question question="3. คุณสามารถเข้าถึงอุปกรณ์ที่จำเป็นสำหรับการดูแล?" />
				<Question question="4. คุณสามารถเข้าถึงการสนับสนุนที่เหมาะสมทางวัฒนธรรม?" />
				<Question question="5. คุณสามารถเข้าถึงการสนับสนุนทางอารมณ์สำหรับตัวเอง?" />
				<div class="flex justify-end">
					<NextButton target="/explore/thanks" />
				</div>
			{/if}
		</div>
	</div>
</VineFrame>
