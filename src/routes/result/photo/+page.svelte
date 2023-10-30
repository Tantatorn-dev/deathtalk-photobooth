<script lang="ts">
	import { onMount } from 'svelte';
	import { avatar, birthDate, name } from '../../../store';
	import { loadImage } from '../../../utils/img';
	import { toThaiDate } from '../../../utils/utils';

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

	let canvasImage: HTMLImageElement;

	const renderCanvas = async () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		const IMG_WIDTH = 390;
		const IMG_HEIGHT = 844;

		const FRAME_WIDTH = 192;
		const FRAME_HEIGHT = 261;

		const originX = (IMG_WIDTH - FRAME_WIDTH) / 2 - 10;
		const originY = (IMG_HEIGHT - FRAME_HEIGHT) / 2 - 220;

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

			const frame = await loadImage(`/frame/black_frame.svg`);
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

			canvasImage.src = canvas.toDataURL("image/png");
		}
	};

	onMount(() => {
		renderCanvas();
	});

</script>

<img bind:this={canvasImage} alt="exported" />
