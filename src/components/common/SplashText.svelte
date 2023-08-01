<script lang="ts">
	export let className = '';

	className = `text-splash ${className}`;
</script>

<p class={className}>
	<slot />
</p>

<style>
	.text-splash {
		background: url('/splash_bg.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
