<script>
	import Frame from '../common/Frame.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
</script>

<div
	class="flex flex-row items-center justify-between w-full bg-[url(/misc/bg_rose.png)] pt-4 pb-4"
>
	{#if browser}
		<Carousel>
			<div class="wrapper-photo">
				<Frame src="/placeholder.svg" />
			</div>
			<div class="wrapper-photo">
				<Frame src="/placeholder.svg" />
			</div>
			<div class="wrapper-photo">
				<Frame src="/placeholder.svg" />
			</div>
		</Carousel>
	{/if}
</div>
<div class="ml-10 mr-10 -mt-5">
	<button class="button-primary">บันทึกรูปภาพ</button>
</div>

<style lang="postcss">
	.wrapper-photo {
		@apply flex flex-row items-center justify-center;
	}
</style>
