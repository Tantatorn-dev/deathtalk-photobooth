<script lang="ts">
	import SplashText from '../common/SplashText.svelte';

	export let chapter: number;
	export let title: string;
	export let subtitle: string = '';
</script>

<div class="flex flex-col items-center justify-center">
	<p class="text-sm">หมวด {chapter}/5</p>
	<SplashText className="pt-4 pb-4 pl-8 pr-8 text-center text-xl">{title}</SplashText>
	<p class="text-xs">{subtitle}</p>
</div>
