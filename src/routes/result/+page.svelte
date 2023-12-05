<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import SplashText from '../../components/common/SplashText.svelte';
	import FacebookShareButton from '../../components/result/FacebookShareButton.svelte';
	import FrameSelector from '../../components/result/FrameSelector.svelte';
	import ScoreBoard from '../../components/result/ScoreBoard.svelte';

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);
</script>

{#if isShow}
	<div in:fade class="flex flex-col justify-between w-full h-full">
		<div class="flex flex-col gap-2 mt-5 ml-6 mr-6">
			<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl mb-5">ผลลัพธ์💡</SplashText>
			<ScoreBoard />
		</div>
		<div class="flex flex-col gap-3 pt-10">
			<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl mb-5">ของที่ระลึก💀</SplashText>
			<FrameSelector />
			<p class="text-sm text-center">
				ร่วมแบ่งปันเรื่องราวเกี่ยวกับ<br />การเตรียมพร้อมสำหรับความตาย/งานศพของคุณ ผ่าน <br /> #deathtalkความตายและชีวิต
			</p>
			<div class="flex justify-center mt-10 mb-10">
				<FacebookShareButton />
			</div>
		</div>
		<div class="flex flex-row w-full pt-4 pb-4 text-white bg-black justify-evenly">
			<a href="https://facebook.com/DeathTalkative" target="_blank">
				<button class="w-32 pt-1">เกี่ยวกับเรา</button>
			</a>
			<div class="vDivider" />
			<button
				on:click={() => {
					goto('/prepare/cta');
				}}
				class="w-32">วิธีเตรียมตัวตาย</button
			>
		</div>
	</div>
{/if}

<style lang="postcss">
	.vDivider {
		@apply w-px h-8 bg-white;
	}
</style>
