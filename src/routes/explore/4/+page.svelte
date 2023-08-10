<script>
	import NextButton from '../../../components/common/NextButton.svelte';
	import Header from '../../../components/explore/Header.svelte';
	import Question from '../../../components/explore/Question.svelte';

	let index = 0;
</script>

<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
	<Header
		chapter={4}
		title="ประเมินความรู้ต่าง ๆ"
		subtitle="ความรู้ต่างๆเกี่ยวกับความตาย"
	/>
	<div class="flex flex-col gap-10 mt-10">
		{#if index == 0}
			<Question question="1. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน?" />
			<Question
				question="2. คุณมั่นใจว่าต้องเตรียมเอกสารอะไรบ้างในการวางแผนการตาย?"
			/>
			<Question
				question="3. คุณรู้วิธีจัดการระบบการดูแลสุขภาพเพื่อสนับสนุนผู้ป่วยที่กำลังจะตาย??"
			/>
			<div class="flex justify-end">
				<NextButton
					onClick={() => {
						index = 1;
					}}
				/>
			</div>
		{:else if index == 1}
			<Question question="4. คุณรู้กฎหมายเกี่ยวกับการตายที่บ้าน?" />
			<Question question="5. คุณรู้วิธีจัดการพิธีศพและทางเลือกต่าง ๆ แค่ไหน ??" />
			<Question question="6. ฉันรู้เกี่ยวกับการบริจาคที่เจ้าหน้าที่สุสานสามารถทำได้เมื่อสิ้นสุดอายุขัย??" />
			<div class="flex justify-end">
				<NextButton target="/explore/intermission" />
			</div>
		{/if}
	</div>
</div>
