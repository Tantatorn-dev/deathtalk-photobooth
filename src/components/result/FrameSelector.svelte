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
		if (!value) value = 'ไม่ระบุชื่อ';
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
		const originY = (canvas.height - FRAME_HEIGHT) / 2 - 220;

		const charmonmanFont = new FontFace(
			'Charmonman',
			`url('fonts/TH Charmonman.ttf')`,
			{
				weight: 'normal',
				style: 'normal'
			}
		);

		const charmonmanFontBold = new FontFace(
			'Charmonman',
			`url('fonts/TH Charmonman Bold.ttf')`,
			{
				weight: 'bold',
				style: 'normal'
			}
		);

		await charmonmanFont.load();
		await charmonmanFontBold.load();

		if (ctx) {
			window.devicePixelRatio = 2;

			canvas.style.width = IMG_WIDTH + 'px';
			canvas.style.height = IMG_HEIGHT + 'px';

			const scale = window.devicePixelRatio;

			canvas.width = Math.floor(IMG_WIDTH * scale);
			canvas.height = Math.floor(IMG_HEIGHT * scale);

			ctx.scale(scale, scale);

			ctx.fillStyle = '#000';
			ctx.rect(0, 0, canvas.width, canvas.height);
			ctx.fill();

			const bg = await loadImage('/share_bg.png');
			ctx.drawImage(bg, 0, 0, IMG_WIDTH, IMG_HEIGHT);

			const whiteFlowers = await loadImage('/misc/white_flowers.png');
			ctx.drawImage(whiteFlowers, originX - 90, originY + 310, 390, 265);

			const frame = await loadImage(`/frame/${selectedFrame}_frame.svg`);
			ctx.drawImage(frame, originX, originY);

			const img = await loadImage(avatarValue);
			ctx.drawImage(img, originX + 40, originY + 30, 144, 144);

			ctx.fillStyle = '#000';
			ctx.textAlign = 'center';
			ctx.font = 'bold 18px Charmonman';

			ctx.fillText(nameValue, originX + 110, originY + 200);

			ctx.font = '14px Charmonman';

			ctx.fillText(`ชาตะ ${toThaiDate(birthDateValue)}`, originX + 110, originY + 230);
			ctx.fillText(`มรณะ ${toThaiDate(new Date())}`, originX + 110, originY + 250);

			ctx.fillStyle = '#000';
			ctx.fillRect(originX + 10, originY + 640, 200, 25);

			ctx.fillStyle = '#fff';
			ctx.font = '14px IBM Plex Sans Thai Looped';
			ctx.fillText('3 Emoji งานศพฉันต้องมีสิ่งเหล่านี้💀', originX + 110, originY + 340);
			ctx.fillText('#deathtalkความตายและชีวิต', originX + 110, originY + 657);

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

	@font-face {
		font-family: 'Charmonman';
		src: url('/fonts/TH Charmonman.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Charmonman';
		src: url('fonts/TH Charmonman Bold.ttf') format('truetype');
		font-weight: bold;
	}
</style>
