<script lang="ts">
	import { goto } from '$app/navigation';
	import VineFrame from '../../../components/frame/VineFrame.svelte';

	setInterval(() => {
		goto('/explore/5');
	}, 5000);
</script>

<VineFrame>
	<div class="flex flex-col items-center justify-center h-full pl-8 pr-8">
		<p class="text-xl">ยังไหวหรือเปล่า? <br /> หมวดสุดท้ายแล้ว..</p>
	</div>
</VineFrame>
