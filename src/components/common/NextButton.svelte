<script lang="ts">
	export let onClick = () => {};
	export let disabled = false;
	export let label = 'ต่อไป';
	export let isAbove = true;

</script>

<button
	on:click={() => {
		if (disabled) return;

		onClick();
	}}
	class={'flex flex-row' + (disabled ? ' opacity-50 cursor-not-allowed' : '') + (isAbove ? ' z-20' : '')}
>
	<p>{label}</p>
	<img src="/arrow/arrow_right.svg" class="w-6 h-6 ml-2" alt="arrow-right" />
</button>
