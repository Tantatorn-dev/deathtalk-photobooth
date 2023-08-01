<script lang="ts">
	export let onClick = () => {};
</script>

<button class="flex flex-col justify-center" on:click={onClick}>
	<img src="/fingerprint.png" class="w-20 ml-auto mr-auto" />
	<p class="mt-2 text-sm">
		<slot />
	</p>
</button>
