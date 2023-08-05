<script lang="ts">
	import { goto } from '$app/navigation';
	import VineFrame from '../../components/frame/VineFrame.svelte';
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
		Hello,
		Portrait,
		Info1,
		Info2,
		Info3,
		Info4
	}

	let stage: Stage = Stage.Hello;

	setInterval(() => {
		if(stage === Stage.Portrait) return;
		if(stage === Stage.Info4) goto('/');
		stage = stage + 1;
	}, 5000);
</script>

{#if stage == Stage.Hello}
	<VineFrame
		><div class="container">
			<p>สวัสดี {nameValue}</p>
		</div></VineFrame
	>
{:else if stage == Stage.Portrait}
	<div class="flex flex-col items-center gap-2 mt-32">
		{#if avatarValue}
			<img src={avatarValue} class="w-48" alt="avatar" />
		{:else}
			<img src="/placeholder.svg" class="w-48" alt="placeholder" />
		{/if}

		<div class="flex flex-col w-full gap-4 pl-10 pr-10 mt-4">
			<p class="text-intro">คุณเคยจินตนาการถึงภาพตัวเองตอนตายไหม?</p>
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
		><div class="container">
			<p class="text-intro">เราอาจมีหลายความรู้สึกเกิดขึ้น หลังจากที่ได้เห็นภาพของตัวเอง</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info2}
	<VineFrame
		><div class="container">
			<p class="text-intro">
				คนส่วนมาก คิดว่าการพูด หรือทำอะไรเกี่ยวกับความตาย เป็นลางร้าย อัปมงคล และไม่ควรพูดถึง
			</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info3}
	<VineFrame
		><div class="container">
			<p class="text-intro">ซึ่งการไม่พูดเรื่องความตาย มีผลเสียมากกว่าที่เราคิด..</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info4}
	<div class="flex flex-col items-center justify-center gap-8 mt-36">
		<img src="/pie.svg" class="w-36" alt="pie-chart" />
		<p class="pl-16 pr-16 text-intro">80% ของคนที่ได้จากไป ไม่มีการวางแผนคาดการณ์ล่วงหน้า</p>
	</div>
{/if}

<style>
	.container {
		@apply flex flex-col items-center justify-center h-full pl-16 pr-16;
	}

	.text-intro {
		@apply text-sm text-center;
	}
</style>
