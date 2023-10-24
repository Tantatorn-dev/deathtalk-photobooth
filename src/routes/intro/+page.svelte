<script lang="ts">
	import { fade } from 'svelte/transition';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import Frame from '../../components/common/Frame.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import VineFrame from '../../components/frame/VineFrame.svelte';
	import IntroText from '../../components/intro/IntroText.svelte';
	import Pie from '../../components/intro/Pie.svelte';
	import { avatar, name } from '../../store';
	import { goto } from '$app/navigation';

	let avatarValue: string;

	avatar.subscribe((value) => {
		avatarValue = value;
	});

	let nameValue: string;
	name.subscribe((value) => {
		nameValue = value;
	});

	enum Stage {
		Init,
		Hello,
		Portrait,
		Info1,
		Info2
	}

	let stage: Stage = Stage.Info2;

	$: if (stage === Stage.Init) {
		setTimeout(() => {
			stage = Stage.Hello;
		}, 1000);
	} else if (stage === Stage.Hello) {
		setTimeout(() => {
			stage = Stage.Portrait;
		}, 2000);
	}

	let isShowPortrait = false;

	$: if (stage === Stage.Portrait) {
		setTimeout(() => {
			isShowPortrait = true;
		}, 1000);
	}

	const portraitToInfo1 = () => {
		isShowPortrait = false;

		setTimeout(() => {
			stage = Stage.Info1;
		}, 1000);
	};

	let introTextCount = 0;

	$: if (stage === Stage.Info1) {
		setTimeout(() => {
			introTextCount = 1;
		}, 1000);
	}

	const onNext = () => {
		if (introTextCount === 3) {
			stage = Stage.Info2;
			return;
		}

		introTextCount += 1;
	};

	let isShowInfo2 = false;

	$: if (stage === Stage.Info2) {
		setTimeout(() => {
			isShowInfo2 = true;
		}, 1000);
	}

	const info2ToExplore = () => {
		isShowInfo2 = false;

		setTimeout(() => {
			goto('/explore/1');
		}, 1000);
	};
</script>

{#if stage == Stage.Init}
	<VineFrame />
{:else if stage == Stage.Hello}
	<VineFrame
		><div class="container-intro">
			<p in:fade out:fade>สวัสดี {nameValue}</p>
		</div></VineFrame
	>
{:else if stage == Stage.Portrait}
	<FadeWrapper isShow={isShowPortrait}>
		<div class="flex flex-col items-center gap-2 pt-10">
			{#if avatarValue}
				<Frame src={avatarValue} showFlower />
			{:else}
				<Frame src="/placeholder.svg" showFlower />
			{/if}

			<div class="flex flex-col w-full gap-4 pl-10 pr-10 mt-4">
				<p class="text-intro">คุณเคยนึกถึงภาพตัวเองในรูปแบบนี้มาก่อนไหม?</p>
				<button class="button-primary" on:click={portraitToInfo1}>เคย</button>
				<button class="button-primary" on:click={portraitToInfo1}>ไม่เคย</button>
			</div>
		</div>
	</FadeWrapper>
{:else if stage == Stage.Info1}
	<VineFrame
		><div class="container-intro">
			<IntroText count={introTextCount} />
		</div>
		<div class="next-button">
			<NextButton onClick={onNext} />
		</div>
	</VineFrame>
{:else if stage == Stage.Info2}
	<FadeWrapper isShow={isShowInfo2}>
		<div class="flex flex-col items-center justify-center gap-8">
			<div class="flex flex-col items-center w-full mt-8 mb-8">
				<p class="p-3 mt-5 mb-5 text-center text-white bg-black w-72">
					80% ของคนที่ได้จากไป ไม่มีการวางแผนคาดการณ์ล่วงหน้า
				</p>
				<Pie />
			</div>
			<p class="pl-16 pr-16 mt-8 text-intro">
				แล้วคุณรู้ตัวไหม<br />
				ว่าคุณมีการเตรียมตัวมากน้อยขนาดไหน?
			</p>
			<NextButton onClick={info2ToExplore} label="เริ่มสำรวจตนเอง" />
		</div>
	</FadeWrapper>
{/if}

<style lang="postcss">
	.container-intro {
		@apply flex flex-col items-center justify-center h-full pl-16 pr-16;
	}

	.text-intro {
		@apply text-sm text-center;
	}

	.next-button {
		@apply fixed right-10 bottom-40;
	}

	@media (min-width: 768px) {
		.next-button {
			@apply absolute right-10 bottom-40;
		}
	}
</style>
