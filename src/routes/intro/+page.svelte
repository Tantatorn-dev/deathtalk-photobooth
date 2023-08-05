<script lang="ts">
	import VineFrame from '../../components/frame/VineFrame.svelte';
	import { avatar } from '../../store';

	let avatarValue: string;

	avatar.subscribe((value) => {
		avatarValue = value;
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
</script>

{#if stage == Stage.Hello}
	<VineFrame
		><div class="flex flex-col items-center justify-center h-full">
			<p>สวัสดี โอม</p>
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
			<p class="text-sm text-center">คุณเคยจินตนาการถึงภาพตัวเองตอนตายไหม?</p>
			<button class="button-primary">เคย</button>
			<button class="button-primary">ไม่เคย</button>
		</div>
	</div>
{:else if stage == Stage.Info1}
	<VineFrame
		><div class="flex flex-col items-center justify-center h-full">
			<p>เราอาจมีหลายความรู้สึกเกิดขึ้น หลังจากที่ได้เห็นภาพของตัวเอง</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info2}
	<VineFrame
		><div class="flex flex-col items-center justify-center h-full">
			<p>คนส่วนมาก คิดว่าการพูด หรือทำอะไรเกี่ยวกับความตาย เป็นลางร้าย อัปมงคล และไม่ควรพูดถึง</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info3}
	<VineFrame
		><div class="flex flex-col items-center justify-center h-full">
			<p>ซึ่งการไม่พูดเรื่องความตาย มีผลเสียมากกว่าที่เราคิด..</p>
		</div></VineFrame
	>
{:else if stage == Stage.Info4}
	<VineFrame
		><div class="flex flex-col items-center justify-center h-full">
			<p>80% ของคนที่ได้จากไป ไม่มีการวางแผนคาดการณ์ล่วงหน้า</p>
		</div></VineFrame
	>
{/if}
