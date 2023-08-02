<script lang="ts">
	import { avatar } from "../../store";

	let avatarValue: string;

	avatar.subscribe((value) => {
		avatarValue = value;
	});
</script>

<div class="flex flex-col items-center gap-2 mt-32">
	{#if avatarValue}
		<img src={avatarValue} class="w-48" alt="avatar" />
	{:else}
		<img src="/placeholder.png" class="w-48" alt="placeholder" />
	{/if}

	<div class="flex flex-col w-full gap-4 pl-10 pr-10 mt-4">
		<p class="text-sm text-center">คุณเคยจินตนาการถึงภาพตัวเองตอนตายไหม?</p>
		<button class="button-primary">เคย</button>
		<button class="button-primary">ไม่เคย</button>
	</div>
</div>
