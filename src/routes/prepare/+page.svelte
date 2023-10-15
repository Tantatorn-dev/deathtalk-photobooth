<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import SplashText2 from '../../components/common/SplashText2.svelte';

	let index = 0;

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

	let isShow3 = false;
	$: if (index == 2) {
		setTimeout(() => {
			isShow3 = true;
		}, 1000);
	}
</script>

<div class="flex flex-col items-center justify-between w-full h-full">
	<p class="mt-20 text-xl">วิธีเตรียมตัวตาย {index + 1}/3</p>
	<div class="flex flex-col items-center">
		{#if index == 0}
			<FadeWrapper isShow={isShow1}>
				<div class="title-container">
					<SplashText2 text="พินัยกรรม" />
				</div>
				<p class="text-description">
					ลายลักษณ์อักษรที่เขียนคำสั่งสุดท้ายเพื่อแสดงเจตนา
					คนที่ยังอยู่หมดปัญหาเรื่องการแบ่งทรัพย์สินมรดก สมบัติของผู้ตาย
				</p>
				<div class="next-btn-container">
					<NextButton
						onClick={() => {
							isShow1 = false;

							setTimeout(() => {
								index++;
							}, 1000);
						}}
					/>
				</div>
			</FadeWrapper>
		{:else if index == 1}
			<FadeWrapper isShow={isShow2}>
				<div class="title-container">
					<SplashText2 text="บริจาคอวัยวะ/ร่างกาย" />
				</div>
				<p class="text-description">
					บริจาคอวัยวะหรือร่างการ ให้กับผู้ที่อวัยวะเสื่อมสภาพ หรือใช้ในการศึกษา
					<br />
					<br />
					เติมเต็มความต้องการภายใน ในการทอบอวัยวะหรือร่างกายให้กับคนอื่น
				</p>
				<div class="next-btn-container">
					<NextButton
						onClick={() => {
							isShow2 = false;

							setTimeout(() => {
								index++;
							}, 1000);
						}}
					/>
				</div>
			</FadeWrapper>
		{:else if index == 2}
			<FadeWrapper isShow={isShow3}>
				<div class="title-container">
					<SplashText2 text="สมุดเบาใจ living will" />
				</div>
				<p class="text-description">
					สมุดแสดงความต้องการสุดท้าย เกี่ยวกับสุขภาพและการตายดี
					<br />
					<br />
					เบาใจตัวเองและคนใกล้ชิด เพราะมีแนวทางปฏิบัติที่ชัดเจน
				</p>
				<div class="next-btn-container">
					<NextButton
					 	label="ลงทะเบียนกิจกรรม"
						onClick={() => {
							isShow3 = false;

							setTimeout(() => {
								goto('https://docs.google.com/forms/d/e/1FAIpQLSfvCN45zZkie_YThhWXn9q1_jmN3-iIgxSueXrsbm-45E-zBQ/viewform?usp=sf_link');
							}, 1000);
						}}
					/>
				</div>
			</FadeWrapper>
		{/if}
	</div>
	{#if index == 0}
		<img src="/misc/legacy.png" alt="legacy" class="w-72 animate-custom-bounce" />
	{:else if index == 1}
		<img src="/misc/hand.svg" alt="hand" class="animate-custom-bounce" />
	{:else if index == 2}
		<img src="/misc/note_2.png" alt="baojai note" class="animate-custom-bounce w-72" />
	{/if}
</div>

<style lang="postcss">
	.text-description {
		@apply text-center pl-10 pr-10;
	}

	.title-container {
		@apply flex flex-col justify-center ml-10 mr-10;
	}

	.next-btn-container {
		@apply mt-10 justify-center flex;
	}

	.animate-custom-bounce {
		animation: customBounce 6s infinite;
	}

	@keyframes customBounce {
		0%,
		100% {
			transform: translateY(50%);
			animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
		}
		50% {
			transform: translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.6, 1);
		}
	}
</style>
