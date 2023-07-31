<script lang="ts">
	import PieChart from './PieChart.svelte';

	let i = 0;

	setInterval(() => {
		i += 1;
		if(i > 4) i = 0;
	}, 5000);

	$: i; 

	let text1 = 'คุณอาจมีหลายความรู้สึกเกิดขึ้น หลังจากที่ได้เห็นรูปหน้าโลงศพ ของตัวเอง';
	let text2 = 'คนส่วนมาก คิดว่าการพูด หรือทำอะไรเกี่ยวกับความตาย เป็นลางร้าย อัปมงคล';
	let text3 = 'ซึ่งการไม่พูดเรื่องความตายมีผลเสียมากกว่าที่คุณคิด..';
	let text4 = `80% ของคนที่ได้จากไป “ไม่มี” การวางแผนคาดการณ์ล่วงหน้า`;
</script>

<div class="flex flex-col gap-4 mt-56 ml-8 mr-8">
	{#if i === 0}
		<p class="text-xl font-bold">
			{text1}
		</p>
		<p class="text-md font-extralight">
			{text2}
		</p>
	{:else if i === 1}
		<p class="text-xl font-bold">{text2}</p>
		<p class="text-md font-extralight">{text3}</p>
	{:else if i == 3}
		<p class="text-xl font-bold">{text3}</p>
		<p class="text-md font-extralight">{text4}</p>
	{:else}
		<p class="text-xl font-bold">{text4}</p>
		<div class="ml-auto mr-auto">
			<PieChart percent={80} />
		</div>
	{/if}
</div>
