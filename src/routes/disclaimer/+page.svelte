<script lang="ts">
	import { goto } from '$app/navigation';
	import SplashText from '../../components/common/SplashText.svelte';

	setTimeout(() => {
		goto('/photo');
	}, 5000);
</script>

<div class="flex flex-col gap-3 mt-20 ml-8 mr-8">
	<SplashText className="text-3xl text-center">คำเตือน</SplashText>
	<p class="mt-4 text-sm text-center">
		Lorem ipsum dolor sit amet consectetur. Hac pharetra quis in orci risus at suspendisse. Ornare
		elementum erat sed pulvinar mattis sed. Maecenas placerat tempor magna varius natoque.
		Sollicitudin varius tortor est massa sed enim.
	</p>
</div>
