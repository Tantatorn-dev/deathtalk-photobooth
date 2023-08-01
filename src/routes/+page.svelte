<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../components/common/Button.svelte';
</script>

<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
	<p class="text-primary text-4xl text-center">ยินดีต้อนรับสู่ <br /> Death Talk</p>
	<p class="text-2xl text-center">คุณเตรียมพร้อมสำหรับ “ความตาย” มากน้อยขนาดไหน?</p>
	<div class="flex flex-col w-full justify-end h-72">
		<Button
			onClick={() => {
				goto('/disclaimer');
			}}>คลิกที่นี่เพื่อเริ่มเล่น</Button
		>
	</div>
</div>
