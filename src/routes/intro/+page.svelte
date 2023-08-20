<script lang="ts">
	import Frame from '../../components/common/Frame.svelte';
import NextButton from '../../components/common/NextButton.svelte';
	import VineFrame from '../../components/frame/VineFrame.svelte';
	import IntroText from '../../components/intro/IntroText.svelte';
	import { avatar, name } from '../../store';

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

	let stage: Stage = Stage.Init;

	$: if (stage === Stage.Init) {
		setTimeout(() => {
			stage = Stage.Hello;
		}, 1000);
	} 
	else if (stage === Stage.Hello) {
		setTimeout(() => {
			stage = Stage.Portrait;
		}, 2000);
	}
	else if (stage === Stage.Info1) {
		setTimeout(() => {
			stage = Stage.Info2;
		}, 12000);
	}
</script>

{#if stage == Stage.Init}
	<VineFrame />
{:else if stage == Stage.Hello}
	<VineFrame
		><div class="container-intro">
			<p>สวัสดี {nameValue}</p>
		</div></VineFrame
	>
{:else if stage == Stage.Portrait}
	<div class="flex flex-col items-center gap-2 pt-10">
		{#if avatarValue}
			<Frame src={avatarValue} showFlower />
		{:else}
			<Frame src="/placeholder.svg" showFlower />
		{/if}

		<div class="flex flex-col w-full gap-4 pl-10 pr-10 mt-4">
			<p class="text-intro">เคยนึกถึงภาพนี้มาก่อนไหม?</p>
			<button
				class="button-primary"
				on:click={() => {
					stage = Stage.Info1;
				}}>เคย</button
			>
			<button
				class="button-primary"
				on:click={() => {
					stage = Stage.Info1;
				}}>ไม่เคย</button
			>
		</div>
	</div>
{:else if stage == Stage.Info1}
	<VineFrame
		><div class="container-intro">
			<IntroText />
		</div></VineFrame
	>
{:else if stage == Stage.Info2}
	<div class="flex flex-col items-center justify-center gap-8 pt-36">
		<img src="/pie.svg" class="w-36" alt="pie-chart" />
		<p class="pl-16 pr-16 text-intro">80% ของคนที่ได้จากไป ไม่มีการวางแผนคาดการณ์ล่วงหน้า</p>
		<NextButton target="/explore">ต่อไป</NextButton>
	</div>
{/if}

<style lang="postcss">
	.container-intro {
		@apply flex flex-col items-center justify-center h-full pl-16 pr-16;
	}

	.text-intro {
		@apply text-sm text-center;
	}
</style>
