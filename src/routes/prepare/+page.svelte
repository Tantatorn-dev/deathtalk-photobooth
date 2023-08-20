<script lang="ts">
	import SplashText from '../../components/common/SplashText.svelte';

	let index = 1;
</script>

<div class="flex flex-col items-center justify-between w-full h-full">
	<p class="mt-20 text-xl">วิธีเตรียมตัวตาย {index + 1}/3</p>
	<div class="flex flex-col items-center">
		{#if index == 0}
			<SplashText className="text-xl text-center pl-10 pr-10 pb-2">พินัยกรรม</SplashText>
			<p class="text-center">
				ลายลักษณ์อักษรที่เขียนคำสั่งสุดท้ายเพื่อแสดงเจตนา
				คนที่ยังอยู่หมดปัญหาเรื่องการแบ่งทรัพย์สินมรดก สมบัติของผู้ตาย
			</p>
		{:else if index == 1}
			<SplashText className="text-xl text-center pl-10 pr-10 pb-2">บริจาคอวัยวะ/ร่างกาย</SplashText
			>
			<p class="text-center">
				บริจาคอวัยวะหรือร่างการ ให้กับผู้ที่อวัยวะเสื่อมสภาพ หรือใช้ในการศึกษา
				<br />
				<br />
				เติมเต็มความต้องการภายใน ในการทอบอวัยวะหรือร่างกายให้กับคนอื่น
			</p>
		{:else if index == 2}
			<SplashText className="text-xl text-center pl-10 pr-10 pb-2"
				>สมุดเบาใจ living will</SplashText
			>
			<p class="text-center">
				สมุดแสดงความต้องการสุดท้าย เกี่ยวกับสุขภาพและการตายดี
				<br />
				<br />
				เบาใจตัวเองและคนใกล้ชิด เพราะมีแนวทางปฏิบัติที่ชัดเจน
			</p>
		{/if}
	</div>
	{#if index == 0}
		<img src="/misc/legacy.svg" alt="legacy" />
	{:else if index == 1}
		<img src="/misc/hand.svg" alt="hand" />
	{:else if index == 2}
		<img src="/misc/note_2.svg" alt="baojai note" />
	{/if}
</div>
