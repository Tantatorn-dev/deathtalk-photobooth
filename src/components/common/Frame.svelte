<script lang="ts">
	import { birthDate, name } from '../../store';
	import { toThaiDate } from '../../utils/utils';

	export let src = '';
	export let showFlower = false;
	export let frameType: 'black' | 'gold' | 'silver' = 'black';

	let frameImg = `/frame/${frameType}_frame.svg`;

	const currentDate = new Date();

	let birthDateValue = new Date();

	birthDate.subscribe((value) => {
		if (value) birthDateValue = new Date(value);
	});

	let nameValue: string;

	name.subscribe((value) => {
		nameValue = value;
	});
</script>

<div class="w-[244px] h-[332px] relative">
	{#if showFlower}
		<img src="/misc/b_rose_1.svg" class="absolute z-10 top-20 right-20" alt="rose 1" />
		<img src="/misc/b_rose_2.svg" class="absolute z-10 top-20 left-24" alt="rose 2" />
	{/if}
	<img src={frameImg} class="absolute z-30 w-full h-full" alt="frame" />
	<div class="absolute left-10 z-40 w-[167px] h-[245px] bg-white top-10">
		<img {src} class="mt-2 ml-auto mr-auto w-36 h-36" alt="avatar" />
		<p class="mt-2 mb-2 text-xs text-center">{nameValue}</p>
		<p class="text-xs text-center">ชาตะ {toThaiDate(birthDateValue)}</p>
		<p class="text-xs text-center">มรณะ {toThaiDate(currentDate)}</p>
	</div>
</div>
