<script lang="ts">
	import Frame from '../common/Frame.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { avatar, birthDate, name } from '../../store';
	import { toThaiDate } from '../../utils/utils';
	import { loadImage } from '../../utils/img';

	let avatarValue: string;

	avatar.subscribe((value) => {
		if (value) {
			avatarValue = value;
		} else {
			avatarValue = '/placeholder.svg';
		}
	});

	let nameValue: string;
	name.subscribe((value) => {
		nameValue = value;
	});

	let birthDateValue: Date;
	birthDate.subscribe((value) => {
		if (value) birthDateValue = new Date(value);
		else birthDateValue = new Date();
	});

	let selectedFrame = 'black';

	const onPageChange = (event: { detail: number }) => {
		switch (event.detail) {
			case 0:
				selectedFrame = 'black';
				break;
			case 1:
				selectedFrame = 'gold';
				break;
			case 2:
				selectedFrame = 'silver';
				break;
		}
	};

	const onDownload = async () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		const IMG_WIDTH = 390;
		const IMG_HEIGHT = 844;

		const FRAME_WIDTH = 192;
		const FRAME_HEIGHT = 261;

		canvas.width = IMG_WIDTH;
		canvas.height = IMG_HEIGHT;
		const originX = (canvas.width - FRAME_WIDTH) / 2 - 10;
		const originY = (canvas.height - FRAME_HEIGHT) / 2;

		if (ctx) {
			if (window.devicePixelRatio != 1.0) {
				ctx.canvas.style.width = ctx.canvas.width / devicePixelRatio + 'px';
				ctx.canvas.style.height = ctx.canvas.height / devicePixelRatio + 'px';
			}

			ctx.fillStyle = '#000';
			ctx.rect(0, 0, canvas.width, canvas.height);
			ctx.fill();

			const bg = await loadImage('/share_bg.png');
			ctx.drawImage(bg, 0, 0, IMG_WIDTH, IMG_HEIGHT);

			const rose = await loadImage('/misc/rose.svg');
			ctx.drawImage(rose, originX - 80, originY + 90, 187, 189);
			ctx.drawImage(rose, originX + 100, originY + 90, 187, 189);

			const frame = await loadImage(`/frame/${selectedFrame}_frame.svg`);
			ctx.drawImage(frame, originX, originY);

			const img = await loadImage(avatarValue);
			ctx.drawImage(img, originX + 40, originY + 30, 144, 144);

			ctx.fillStyle = '#000';
			ctx.textAlign = 'center';
			ctx.font = '11.5px IBM Plex Sans Thai Looped';

			ctx.fillText(nameValue, originX + 110, originY + 210);
			ctx.fillText(`ชาตะ ${toThaiDate(birthDateValue)}`, originX + 110, originY + 230);
			ctx.fillText(`มรณะ ${toThaiDate(new Date())}`, originX + 110, originY + 250);

			ctx.fillStyle = '#fff';
			ctx.font = '14px IBM Plex Sans Thai Looped';
			ctx.fillText('#Deathtalk', originX + 110, originY + 380);
			ctx.fillText('www.Deathtalk.th', originX + 110, originY + 420);
			ctx.fillText(`${nameValue} ผ่านการทำความเข้าใจความตาย`, originX + 110, originY - 150);

			const link = document.createElement('a');
			link.download = 'deathtalkth.png';
			link.href = canvas.toDataURL('image/png');
			link.click();
		}
	};
</script>

<div
	class="flex flex-row items-center justify-between w-full bg-[url(/misc/bg_rose.png)] pt-4 pb-4"
>
	{#if browser}
		<Carousel on:pageChange={onPageChange}>
			<div class="wrapper-photo">
				<Frame src={avatarValue} frameType="black" />
			</div>
			<div class="wrapper-photo">
				<Frame src={avatarValue} frameType="gold" />
			</div>
			<div class="wrapper-photo">
				<Frame src={avatarValue} frameType="silver" />
			</div>
		</Carousel>
	{/if}
</div>
<div class="ml-10 mr-10 -mt-5">
	<button on:click={onDownload} class="button-primary">บันทึกรูปภาพ</button>
</div>

<style lang="postcss">
	.wrapper-photo {
		@apply flex flex-row items-center justify-center;
	}
</style>
