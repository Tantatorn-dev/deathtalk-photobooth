<script lang="ts">
	import { goto } from '$app/navigation';

	setTimeout(() => {
		goto('/result');
	}, 5000);
</script>

<div class="relative w-full h-full">
	<div class="flex items-center justify-center h-full">
		<p>ขอบคุณที่มาสำรวจตัวเองนะ</p>
	</div>
	<div class="absolute bottom-0 w-full">
		<img src="/misc/rose.svg" alt="family" class="ml-auto mr-auto" />
	</div>
</div>
