<script lang="ts">
	import { fly } from 'svelte/transition';
	export let count = 0;
</script>

{#if count === 1}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		คุณอาจมีหลายความรู้สึกเกิดขึ้น <br />หลังจากที่ได้เห็นภาพของตัวเอง
	</p>
{:else if count === 2}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		คนส่วนมากคิดว่า <br />การพูดหรือการทำอะไรเกี่ยวกับความตาย <br />เป็นลางร้าย อัปมงคล
		และไม่ควรพูดถึง
	</p>
{:else if count === 3}
	<p class="text-intro" in:fly={{ y: 200, duration: 2000 }} out:fly={{ y: -200, duration: 2000 }}>
		ซึ่งการไม่พูดเรื่องความตาย<br />มีผลเสียมากกว่าที่คุณคิด..
	</p>
{/if}

<style lang="postcss">
	.text-intro {
		@apply text-sm text-center;
	}
</style>
