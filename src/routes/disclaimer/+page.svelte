<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../../components/common/Button.svelte';
</script>

<div class="flex flex-col gap-3 ml-8 mr-8 mt-20">
	<p class="text-primary text-4xl text-center">คำเตือน</p>
	<p class="text-sm text-center">
		Lorem ipsum dolor sit amet consectetur. Hac pharetra quis in orci risus at suspendisse. Ornare
		elementum erat sed pulvinar mattis sed. Maecenas placerat tempor magna varius natoque.
		Sollicitudin varius tortor est massa sed enim.
	</p>
	<div class="flex flex-col w-full justify-end h-72">
		<Button
			onClick={() => {
				goto('/intro');
			}}>ต่อไป</Button
		>
	</div>
</div>
