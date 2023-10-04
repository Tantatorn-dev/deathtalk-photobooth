<script lang="ts">
	import { goto } from '$app/navigation';
	import Cropper from 'svelte-easy-crop';
	import { DatePicker } from 'stwui';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import useFade from '../../components/common/FadeWrapper/useFade';
	import NextButton from '../../components/common/NextButton.svelte';
	import { avatar, birthDate, name } from '../../store';

	let fileinput: HTMLInputElement;

	let avatarValue: string;
	let nameValue: string;
	let birthDateValue: string;

	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let pixelCrop = { x: 0, y: 0, width: 0, height: 0 };

	let isCropped = false;

	const onFinishCrop = () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		const image = new Image();
		image.src = avatarValue;

		image.onload = () => {
			canvas.width = pixelCrop.width;
			canvas.height = pixelCrop.height;

			ctx.drawImage(
				image,
				pixelCrop.x,
				pixelCrop.y,
				pixelCrop.width,
				pixelCrop.height,
				0,
				0,
				pixelCrop.width,
				pixelCrop.height
			);

			canvas.toBlob(
				(blob) => {
					if (blob) avatar.set(URL.createObjectURL(blob));
				},
				'image/jpeg',
				1
			);
		};

		isCropped = true;
	};

	avatar.subscribe((value) => {
		avatarValue = value;
	});

	name.subscribe((value) => {
		nameValue = value;
	});

	birthDate.subscribe((value) => {
		birthDateValue = value;
	});

	const onOpenFileInput = () => {
		isCropped = false;
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
			if (e.target) {
				avatar.set(e.target.result as string);
			}
		};
	};

	const onUpdateName = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		name.set(e.currentTarget.value);
	};

	const onUpdateBirthDate = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		birthDate.set(e.currentTarget.value);
	};

	const { isShowStore, enhanceCallback } = useFade(() => goto('/intro'));

	let isShow = false;
	isShowStore.subscribe((value) => {
		isShow = value;
	});
</script>

<FadeWrapper {isShow}>
	<div class="flex flex-col items-center gap-2 pt-16 pl-16 pr-16">
		{#if avatarValue}
			{#if isCropped}
				<img src={avatarValue} class="w-48 h-48" alt="avatar" />
			{:else}
				<Cropper
					image={avatarValue}
					bind:crop
					bind:zoom
					aspect={1}
					on:cropcomplete={({ detail }) => (pixelCrop = detail.pixels)}
				/>
				<div class="absolute w-48 bottom-10">
					<button class="button-primary" on:click={onFinishCrop}>บันทึก</button>
				</div>
			{/if}
		{:else}
			<img src="/placeholder.svg" class="w-48 h-48" alt="placeholder" />
		{/if}

		<div class="flex flex-col w-full gap-1 mt-4">
			<p class="text-sm">ชื่อ*</p>
			<input
				type="text"
				on:input={onUpdateName}
				class="button-secondary bg-secondary"
				placeholder="พิมพ์ชื่อ"
			/>
		</div>

		<div class="flex flex-col w-full gap-1 mt-4">
			<p class="text-sm">วันเกิด*</p>
			<DatePicker name="date" placeholder="เลือกวันเกิด" data-theme="mytheme" />
		</div>

		<div class="flex flex-col w-full gap-1 mt-4">
			<p class="text-sm">รูปโปรไฟล์</p>
			<button class="button-secondary" on:click={onOpenFileInput}>อัปโหลดรูปภาพ</button>
		</div>

		<div class="flex flex-row justify-end w-full mt-8">
			<NextButton onClick={enhanceCallback} disabled={!nameValue || !birthDateValue} />
		</div>
	</div>
</FadeWrapper>
<input
	class="hidden"
	type="file"
	accept=".jpg, .jpeg, .png"
	on:change={(e) => onFileSelected(e)}
	bind:this={fileinput}
/>
