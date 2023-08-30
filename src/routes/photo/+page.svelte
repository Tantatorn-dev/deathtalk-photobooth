<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import { avatar, birthDate, name } from '../../store';

	let fileinput: HTMLInputElement;

	let avatarValue: string;
	let nameValue: string;
	let birthDateValue: string;

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

	const onUpdateName = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		name.set(e.currentTarget.value);
	};

	const onUpdateBirthDate = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		birthDate.set(e.currentTarget.value);
	};

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);

	const navigate = () => {
		isShow = false;

		setTimeout(() => {
			goto('/intro');
		}, 2000);
	};
</script>

<FadeWrapper {isShow}>
	<div class="flex flex-col items-center gap-2 pt-16 pl-16 pr-16">
		{#if avatarValue}
			<img src={avatarValue} class="w-48 h-48" alt="avatar" />
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
			<input
				type="date"
				on:input={onUpdateBirthDate}
				class="button-secondary bg-secondary"
				placeholder="เลือกวันเกิด"
			/>
		</div>

		<div class="flex flex-col w-full gap-1 mt-4">
			<p class="text-sm">รูปโปรไฟล์</p>
			<button class="button-secondary" on:click={onOpenFileInput}>อัปโหลดรูปภาพ</button>
		</div>

		<div class="flex flex-row justify-end w-full mt-8">
			<NextButton onClick={navigate} disabled={!nameValue || !birthDateValue} />
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
