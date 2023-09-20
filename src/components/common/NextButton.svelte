<script lang="ts">
	export let onClick = () => {};
	export let disabled = false;
	export let label = 'ต่อไป';

</script>

<button
	on:click={() => {
		if (disabled) return;

		onClick();
	}}
	class={'z-20 flex flex-row' + (disabled ? ' opacity-50 cursor-not-allowed' : '')}
>
	<p>{label}</p>
	<img src="/arrow/arrow_right.svg" class="w-6 h-6 ml-2" alt="arrow-right" />
</button>
