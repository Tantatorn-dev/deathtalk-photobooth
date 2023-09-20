<script lang="ts">
	import { fly } from 'svelte/transition';

	export let show1 = false;
	export let show2 = false;
	export let show3 = false;

	setTimeout(() => {
		show1 = true;
	}, 1000);

	setTimeout(() => {
		show1 = false;
		show2 = true;
	}, 5000);

	setTimeout(() => {
		show2 = false;
		show3 = true;
	}, 8000);
</script>

{#if show1}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		คุณอาจมีหลายความรู้สึกเกิดขึ้น <br />หลังจากที่ได้เห็นภาพของตัวเอง
	</p>
{/if}

{#if show2}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		คนส่วนมากคิดว่า การพูดหรือการทำอะไรเกี่ยวกับความตาย เป็นลางร้าย อัปมงคล และไม่ควรพูดถึง
	</p>
{/if}

{#if show3}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		ซึ่งการไม่พุดเรื่องความตาย<br />มีผลเสียมากกว่าที่คุณคิด..
	</p>
{/if}

<style lang="postcss">
	.text-intro {
		@apply text-sm text-center;
	}
</style>
