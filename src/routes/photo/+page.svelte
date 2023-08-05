<script lang="ts">
	import NextButton from '../../components/common/NextButton.svelte';
	import { avatar } from '../../store';

	let fileinput: HTMLInputElement;

	let avatarValue: string;

	avatar.subscribe((value) => {
		avatarValue = value;
	});

	const onOpenFileInput = () => {
		fileinput.click();
	};

	const onFileSelected = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		let image = e.currentTarget?.files?.[0];
		let reader = new FileReader();

		if (!image) return;

		reader.readAsDataURL(image);
		reader.onload = (e) => {
			if (e.target) avatar.set(e.target.result as string);
		};
	};
</script>

<div class="flex flex-col items-center gap-2 pl-16 pr-16 mt-16">
	{#if avatarValue}
		<img src={avatarValue} class="w-48" alt="avatar" />
	{:else}
		<img src="/placeholder.svg" class="w-48" alt="placeholder" />
	{/if}

	<div class="flex flex-col w-full gap-1 mt-4">
		<p class="text-sm">ชื่อ</p>
		<input type="text" class="button-secondary bg-secondary" placeholder="พิมพ์ชื่อ" />
	</div>

	<div class="flex flex-col w-full gap-1 mt-4">
		<p class="text-sm">วันเกิด</p>
		<input type="text" class="button-secondary bg-secondary" placeholder="เลือกวันเกิด" />
	</div>

	<div class="flex flex-col w-full gap-1 mt-4">
		<p class="text-sm">รูปโปรไฟล์</p>
		<button class="button-secondary" on:click={onOpenFileInput}>อัปโหลดรูปภาพ</button>
	</div>

	<div class="flex flex-row justify-end w-full mt-8">
		<NextButton target="/intro" />
	</div>
</div>
<input
	class="hidden"
	type="file"
	accept=".jpg, .jpeg, .png"
	on:change={(e) => onFileSelected(e)}
	bind:this={fileinput}
/>
