<script lang="ts">
	export let onClick = () => {};
	export let label = "ย้อนกลับ";
	export let disabled = false;
</script>

<button
	on:click={() => {
		if (disabled) return;

		onClick();
	}}
	class={'z-20 flex flex-row' + (disabled ? ' opacity-50 cursor-not-allowed' : '')}
>
	<img src="/arrow/arrow_left.svg" class="w-6 h-6 mr-2" alt="arrow-right" />
	<p>{label}</p>
</button>
