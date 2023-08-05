<script lang="ts">
	import { goto } from '$app/navigation';
	import SplashText from '../../components/common/SplashText.svelte';

	setTimeout(() => {
		goto('/photo');
	}, 5000);
</script>

<div class="flex flex-col gap-3 mt-20 ml-4 mr-4">
	<SplashText className="text-3xl text-center">คำเตือน</SplashText>
	<p class="mt-4 text-xs text-center">
		เว็บไซต์นี้มีเนื้อหาเกี่ยวกับความตาย หากคุณรู้สึกไม่โอเค <br> “สามารถหยุดเล่นได้ตลอดเวลา”
	</p>
</div>
