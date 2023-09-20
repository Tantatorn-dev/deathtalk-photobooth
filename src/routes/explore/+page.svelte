<script lang="ts">
	import { goto } from '$app/navigation';
	import FadeWrapper from '../../components/common/FadeWrapper/FadeWrapper.svelte';
	import { name } from '../../store';

	let nameValue: string;
	name.subscribe((value) => {
		nameValue = value;
	});

	let isShow = false;

	setTimeout(() => {
		isShow = true;
	}, 1000);

	const navigate = (path: string) => () => {
		isShow = false;

		setTimeout(() => {
			goto(path);
		}, 1000);
	};
</script>

<div class="relative w-full h-full">
	<FadeWrapper className="flex flex-col items-center justify-center h-full pl-8 pr-8" {isShow}>
		<p>{nameValue} รู้จักความตายดีแค่ไหน ?</p>
		<div class="flex flex-col w-full gap-4 pl-16 pr-16 mt-4">
			<button on:click={navigate('/explore/1')} class="button-primary">เริ่มสำรวจตนเอง</button>
		</div>
	</FadeWrapper>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/note.svg" class="ml-auto mr-auto animate-custom-bounce" alt="note" />
	</div>
</div>

<style>
	.animate-custom-bounce {
		animation: customBounce 6s infinite;
	}

	@keyframes customBounce {
		0%,
		100% {
			transform: translateY(50%);
			animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
		}
		50% {
			transform: translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.6, 1);
		}
	}
</style>
