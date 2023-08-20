<script lang="ts">
	import { goto } from '$app/navigation';
	import SplashText2 from '../../components/common/SplashText2.svelte';

	let index = 0;
	setInterval(() => {
		if(index == 2) {
			goto('/explore');
		}

		index = (index + 1) % 3;
	}, 3000)
</script>

<div class="flex flex-col items-center justify-between w-full h-full">
	<p class="mt-20 text-xl">วิธีเตรียมตัวตาย {index + 1}/3</p>
	<div class="flex flex-col items-center">
		{#if index == 0}
		 	<SplashText2 text="พินัยกรรม" />
			<p class="text-description">
				ลายลักษณ์อักษรที่เขียนคำสั่งสุดท้ายเพื่อแสดงเจตนา
				คนที่ยังอยู่หมดปัญหาเรื่องการแบ่งทรัพย์สินมรดก สมบัติของผู้ตาย
			</p>
		{:else if index == 1}
		 	<SplashText2 text="บริจาคอวัยวะ/ร่างกาย" />
			<p class="text-description">
				บริจาคอวัยวะหรือร่างการ ให้กับผู้ที่อวัยวะเสื่อมสภาพ หรือใช้ในการศึกษา
				<br />
				<br />
				เติมเต็มความต้องการภายใน ในการทอบอวัยวะหรือร่างกายให้กับคนอื่น
			</p>
		{:else if index == 2}
		 	<SplashText2 text="สมุดเบาใจ living will" />
			<p class="text-description">
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

<style lang="postcss">
	.text-description {
		@apply text-center pl-10 pr-10;
	}
</style>