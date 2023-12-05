<script lang="ts">
	import { answers } from '../../store';
	import {
		calculateScore,
		determineGrade,
		gradeStrMap,
		type Category,
		calculateScoresByCategory
	} from '../../utils/score';

	let sumScore = 0;
	let grade = 4;

	let categoryScores: Record<Category, number> = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0
	};

	answers.subscribe((value) => {
		categoryScores = calculateScoresByCategory(value);
		sumScore = calculateScore(value);
		grade = determineGrade(sumScore);
	});

	const categoryInfos: Record<
		Category,
		{
			label: string;
			avgScore: number;
		}
	> = {
		a: {
			label: 'การพูดคุยเกี่ยวกับความตาย',
			avgScore: 5.5
		},
		b: {
			label: 'การช่วยเหลือผู้ป่วย',
			avgScore: 4.4
		},
		c: {
			label: 'ประสบการณ์ต่าง ๆ',
			avgScore: 5.9
		},
		d: {
			label: 'ประเมินความรู้ต่าง ๆ',
			avgScore: 3.1
		},
		e: {
			label: 'เข้าถึงความช่วยเหลือ',
			avgScore: 4.2
		}
	};

	const getInfo = (category: string) => {
		return {
			label: categoryInfos[category as Category].label,
			avgScore: categoryInfos[category as Category].avgScore,
			score: categoryScores[category as Category]
		};
	};
</script>

<div class="pt-4 pb-4 bg-black rounded-xl">
	<div class="flex flex-col gap-1">
		<p class="text-center title">คุณมีการรู้เท่าทันความตายได้ระดับ {grade}</p>
		<p class="pl-6 pr-6 text-center subtitle">
			คุณถือว่ามีความรู้ด้านการรู้เท่าทันความตายในระดับ {gradeStrMap[grade]}
		</p>
	</div>
	<div class="flex flex-col mt-5">
		<p class="text-center title">รายละเอียดคะแนนของคุณ</p>
		<div class="grid grid-cols-12 mt-2 ml-4 mr-4">
			{#each Object.keys(categoryScores) as category}
				<div class="col-span-8 font-light text-white">{getInfo(category).label}</div>
				<div class="col-span-2 text-center text-yellow-300">{getInfo(category).avgScore}</div>
				<div
					class={`col-span-2 text-center ${
						getInfo(category).score >= getInfo(category).avgScore ? 'text-green-500' : 'text-red-500'
					}`}
				>
					{getInfo(category).score.toFixed(1)}
				</div>
			{/each}
		</div>
		<div class="flex flex-col gap-2 mt-3 mb-3 ml-4 mr-4">
			<div class="flex flex-row">
				<div class="w-2 h-2 mt-1 bg-yellow-300 rounded-full" />
				<p class="h-2 ml-2 subtitle">ค่าเฉลี่ยของประเทศออสเตรเลียในปี 2019</p>
			</div>
			<div class="flex flex-row">
				<div class="w-2 h-2 mt-1 bg-green-500 rounded-full" />
				<p class="h-2 ml-2 subtitle">คะแนนของคุณอยู่สูงกว่าค่าเฉลี่ย</p>
			</div>
			<div class="flex flex-row">
				<div class="w-2 h-2 mt-1 bg-red-500 rounded-full" />
				<p class="h-2 ml-2 subtitle">คะแนนของคุณอยู่ต่ำกว่าค่าเฉลี่ย</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.title {
		@apply mt-1  text-white;
	}

	.subtitle {
		@apply text-xs  text-[rgb(92,92,92)];
	}
</style>
