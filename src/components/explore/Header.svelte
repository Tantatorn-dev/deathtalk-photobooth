<script lang="ts">
	import SplashText from '../common/SplashText.svelte';

	export let chapter: number;
	export let title: string;
	export let subtitle: string;
</script>

<div class="flex flex-col items-center justify-center">
	<p class="text-sm">หมวด {chapter}/5</p>
	<SplashText className="pt-2  pb-2 text-center">{title}</SplashText>
	<p class="text-xs">{subtitle}</p>
</div>
