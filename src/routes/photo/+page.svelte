<script lang="ts">
	import ArrowRight from "../../components/photo/ArrowRight.svelte";

</script>

<div class="flex flex-col items-center gap-2 mt-32">
	<img src="/placeholder.png" class="w-48" alt="placeholder" />

	<div class="flex flex-col w-full gap-1 pl-16 pr-16 mt-4">
		<p class="text-sm">ชื่อ</p>
		<input type="text" class="w-full p-2 border border-black rounded-md" />
	</div>

	<div class="flex flex-col w-full gap-1 pl-16 pr-16 mt-4">
		<p class="text-sm">รูปโปรไฟล์</p>
		<button class="w-full p-2 border border-black rounded-md">อัปโหลดรูปภาพ</button>
	</div>

	<button class="flex flex-row justify-end w-full pr-20 mt-8">
		<p>ต่อไป</p>
		<ArrowRight />
	</button>
</div>
