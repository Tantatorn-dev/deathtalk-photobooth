<script lang="ts">
	import Frame from '../common/Frame.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { avatar, birthDate, name } from '../../store';
	import { toThaiDate } from '../../utils/utils';

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

	const onDownload = () => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		canvas.width = 244;
		canvas.height = 332;

		const frame = new Image();
		frame.src = '/frame.png';

		const img = new Image();
		img.src = avatarValue;

		if (ctx) {
			// draw bg
			ctx.fillStyle = '#000';
			ctx.rect(0, 0, canvas.width, canvas.height);
			ctx.fill();

			// draw frame bg
			ctx.fillStyle = '#fff';
			ctx.fillRect(40, 40, 180, 250);

			ctx.drawImage(frame, 0, 0);
			ctx.drawImage(img, 50, 50, 144, 144);

			ctx.fillStyle = '#000';
			ctx.textAlign = 'center';
			ctx.font = "11.5px IBM Plex Sans Thai Looped";

			ctx.fillText(nameValue, 120, 210);
			ctx.fillText(`ชาตะ ${toThaiDate(birthDateValue)}`, 120, 230);
			ctx.fillText(`มรณะ ${toThaiDate(new Date())}`, 120, 250);

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
		<Carousel>
			<div class="wrapper-photo">
				<Frame src={avatarValue} />
			</div>
			<div class="wrapper-photo">
				<Frame src={avatarValue} />
			</div>
			<div class="wrapper-photo">
				<Frame src={avatarValue} />
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
