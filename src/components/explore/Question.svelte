<script lang="ts">
	export let question = '';
</script>

<div class="flex flex-col gap-2">
	<p>{question}</p>
	<div class="flex flex-row">
		<div class="flex flex-col items-center justify-center">
			<div class="choicebox" />
			<p class="label">น้อยมาก</p>
		</div>
		<div class="line" />
		<div class="flex flex-col items-center justify-center">
			<div class="choicebox" />
			<p class="label">น้อย</p>
		</div>
		<div class="line" />
		<div class="flex flex-col items-center justify-center">
			<div class="choicebox" />
			<p class="label">ปานกลาง</p>
		</div>
		<div class="line" />
		<div class="flex flex-col items-center justify-center">
			<div class="choicebox" />
			<p class="label">มาก</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.choicebox {
		@apply w-14 h-14 bg-white rounded-lg border border-black;
	}

	.label {
		@apply text-xs text-center;
	}

	.line {
		@apply w-14 h-0.5 bg-black mt-7 ml-0.5 mr-0.5;
	}
</style>
