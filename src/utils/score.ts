import { Choice, type Answer } from '../store';

export const choiceScoreMap = {
	[Choice.VERY_LITTLE]: 1,
	[Choice.LITTLE]: 2,
	[Choice.MEDIUM]: 3,
	[Choice.MUCH]: 4
};

type Category = 'a' | 'b' | 'c' | 'd' | 'e';

const categoryModifierMap: Record<Category, number> = {
	a: 16,
	b: 16,
	c: 16,
	d: 24,
	e: 20
};

export const calculateScore = (answers: Answer[]): number => {
	const categoryScores: Record<Category, number> = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0
	};

	// find the score for each category
	answers.forEach((answer) => {
		const category = answer.name[0].toLowerCase() as Category;
		const score = choiceScoreMap[answer.choice];

		categoryScores[category] += score;
	});

	// calculate the total score by using special formula
	(['a', 'b', 'c', 'd', 'e'] as Category[]).forEach((category) => {
		categoryScores[category] = (categoryScores[category] * 10) / categoryModifierMap[category];
	});

	const sum = Object.values(categoryScores).reduce((acc, curr) => acc + curr, 0);
	return sum;
};

export const isAllAnswered = (answers: Answer[], names: string[]) => {
	const answeredNames = answers.map((answer) => answer.name);

	return names.every((name) => answeredNames.includes(name));
};

export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const determineGrade = (score: number): Grade => {
	if (score <= 7) {
		return 2;
	} else if (score <= 15) {
		return 3;
	} else if (score <= 23) {
		return 4;
	} else if (score <= 32) {
		return 5;
	} else if (score <= 41) {
		return 6;
	} else {
		return 7;
	}
};
