<script lang="ts">
	import Frame from '../common/Frame.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { avatar } from '../../store';
	import { goto } from '$app/navigation';

	let avatarValue: string;

	avatar.subscribe((value) => {
		if (value) {
			avatarValue = value;
		} else {
			avatarValue = '/placeholder.svg';
		}
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
	<button on:click={()=>{
		goto(`/result/photo?frame=${selectedFrame}`)
	}} class="button-primary">บันทึกรูปภาพ</button>
</div>

<style lang="postcss">
	.wrapper-photo {
		@apply flex flex-row items-center justify-center;
	}
</style>
