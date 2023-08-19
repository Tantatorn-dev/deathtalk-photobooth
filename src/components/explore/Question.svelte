<script lang="ts">
	import { Choice, answers, type Answer } from '../../store';

	export let question = '';
	export let name: string;

	let selected: Choice | null = null;

	let answersValue: Answer[] = [];
	answers.subscribe((value) => {
		answersValue = value;
	});

	const onSelect = (choice: Choice) => {
		selected = choice;

		// Update answers array
		const index = answersValue.findIndex((answer) => answer.name === name);
		if (index !== -1) {
			answersValue[index].choice = selected;
		} else {
			answersValue.push({
				name: name,
				choice: selected
			});
		}

		answers.set(answersValue);
	};
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
				<button class="choicebox" on:click={()=>onSelect(Choice.VERY_LITTLE)} />
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
				<button class="choicebox" on:click={()=>onSelect(Choice.LITTLE)} />
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
				<button class="choicebox" on:click={()=>onSelect(Choice.MEDIUM)} />
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
				<button class="choicebox" on:click={()=>onSelect(Choice.MUCH)} />
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
