<script lang="ts">
	export let text: string;
</script>

<button class="bg-primary rounded-md pl-8 pr-8 pt-1 pb-1 text-xl relative text-black">
	{text}
	<div class="absolute -right-1 -bottom-1 rounded-md border-primary border-[1px] w-full h-full" />
</button>
