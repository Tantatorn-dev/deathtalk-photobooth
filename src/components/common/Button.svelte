<script lang="ts">
	export let text: string;

	let clicked = false;

	const handleClick = () => {
		clicked = true;

		setTimeout(() => {
			clicked = false;
		}, 200);
	};

	const getBodyStyle = (clicked: boolean) => {
		if (clicked) {
			return 'button-body translate-x-1 translate-y-1';
		} else {
			return 'button-body';
		}
	};
</script>

<button on:click={handleClick} class="relative">
	<div class={getBodyStyle(clicked)}>
		{text}
	</div>
	<div class="button-shadow" />
</button>

<style>
	.button-body {
		@apply bg-primary text-black rounded-md pl-8 pr-8 pt-1 pb-1 text-xl transition-all duration-100;
	}

	.button-shadow {
		@apply absolute -right-1 -bottom-1 rounded-md border-primary border-[1px] w-full h-full;
	}
</style>
