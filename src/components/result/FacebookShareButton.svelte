<script>
	import { goto } from '$app/navigation';
</script>

<button
	on:click={() => {
		goto(
			'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdeathtalk-photobooth.vercel.app%2F&amp;src=sdkpreparse'
		);
	}}
	class="flex flex-row pt-2 pb-2 pl-5 pr-5 text-white bg-blue-500 rounded gap-x-2"
>
	<img src="/misc/facebook.svg" class="w-6 h-6" alt="facebook" />
	<span>แชร์เว็บนี้ให้เพื่อนคุณเล่น</span>
</button>
