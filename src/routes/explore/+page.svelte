<script lang="ts">
	import { goto } from '$app/navigation';
	import { name } from '../../store';
	let nameValue: string;
	name.subscribe((value) => {
		nameValue = value;
	});
</script>

<div class="relative w-full h-full">
	<div class="flex flex-col items-center justify-center h-full pl-8 pr-8">
		<p>{nameValue} รู้จักความตายดีแค่ไหน ?</p>
		<div class="flex flex-col w-full gap-4 pl-16 pr-16 mt-4">
			<button on:click={() => goto('/explore/1')} class="button-primary">เริ่มสำรวจตนเอง</button>
			<button on:click={() => goto('/prepare')} class="text-center underline"
				>สำรวจวิธีเตรียมตาย</button
			>
		</div>
	</div>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/note.svg" class="ml-auto mr-auto" alt="note" />
	</div>
</div>
