<script lang="ts">
	import { Choice } from '../../utils/score';

	export let question = '';

	let selected: Choice | null = null;
</script>

<div class="flex flex-col gap-2">
	<p class="text-sm">{question}</p>
	<div class="flex flex-row">
		<div class="choice">
			{#if selected === Choice.VERY_LITTLE}
				<div class="choicebox selected">
					<img src="/check.svg" alt="check" />
				</div>
			{:else}
				<button class="choicebox" on:click={() => (selected = Choice.VERY_LITTLE)} />
			{/if}
			<p class="label">น้อยมาก</p>
		</div>
		<div class="line" />
		<div class="choice">
			{#if selected === Choice.LITTLE}
				<div class="choicebox selected">
					<img src="/check.svg" alt="check" />
				</div>
			{:else}
				<button class="choicebox" on:click={() => (selected = Choice.LITTLE)} />
			{/if}
			<p class="label">น้อย</p>
		</div>
		<div class="line" />
		<div class="choice">
			{#if selected === Choice.MEDIUM}
				<div class="choicebox selected">
					<img src="/check.svg" alt="check" />
				</div>
			{:else}
				<button class="choicebox" on:click={() => (selected = Choice.MEDIUM)} />
			{/if}
			<p class="label">ปานกลาง</p>
		</div>
		<div class="line" />
		<div class="choice">
			{#if selected === Choice.MUCH}
				<div class="choicebox selected">
					<img src="/check.svg" alt="check" />
				</div>
			{:else}
				<button class="choicebox" on:click={() => (selected = Choice.MUCH)} />
			{/if}
			<p class="label">มาก</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.choice {
		@apply flex flex-col items-center justify-center gap-1;
	}

	.choicebox {
		@apply w-14 h-14 bg-white rounded-lg border border-black;
	}

	.selected {
		@apply bg-primary flex items-center justify-center;
	}

	.label {
		@apply text-xs text-center;
	}

	.line {
		@apply w-14 h-0.5 bg-black mt-7 ml-0.5 mr-0.5;
	}
</style>
