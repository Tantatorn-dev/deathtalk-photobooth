<script lang="ts">
	import { birthDate, name } from '../../store';
	import { toThaiDate } from '../../utils/utils';
	export let src = '';

	const currentDate = new Date();

	let birthDateValue = new Date();

	birthDate.subscribe((value) => {
		birthDateValue = new Date(value);
	});

	let nameValue: string;

	name.subscribe((value) => {
		nameValue = value;
	});
</script>

<div class="w-[244px] h-[332px] relative">
	<img src="/frame.png" class="w-full h-full" alt="frame" />
	<div class="absolute bottom-0 left-0 right-0 top-12">
		<img {src} class="ml-auto mr-auto w-36 h-36" alt="avatar" />
		<p class="mt-2 mb-2 text-xs text-center">{nameValue}</p>
		<p class="text-xs text-center">ชาตะ {toThaiDate(birthDateValue)}</p>
		<p class="text-xs text-center">มรณะ {toThaiDate(currentDate)}</p>
	</div>
</div>
