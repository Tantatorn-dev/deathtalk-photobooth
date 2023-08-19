import { Choice, type Answer } from "../store";

export const choiceScoreMap = {
	[Choice.VERY_LITTLE]: 1,
	[Choice.LITTLE]: 2,
	[Choice.MEDIUM]: 3,
	[Choice.MUCH]: 4
};

type Category = 'A' | 'B' | 'C' | 'D' | 'E';

type CategoryScore = {
	category: Category;
	score: number;
};

const maxScores: CategoryScore[] = [
	{
		category: 'A',
		score: 16
	},
	{
		category: 'B',
		score: 16
	},
	{
		category: 'C',
		score: 20
	},
	{
		category: 'D',
		score: 28
	},
	{
		category: 'E',
		score: 20
	}
];

export const sumScore = (myScore: CategoryScore[]) => {
	return myScore.reduce((acc, cur) => {
		const maxScore = maxScores?.find((maxScore) => maxScore.category === cur.category);

		return acc + (cur.score * 10) / (maxScore?.score || 1);
	}, 0);
};

export const isAllAnswered = (answers: Answer[], names: string[]) => {
	const answeredNames = answers.map((answer) => answer.name);
	
	return names.every((name) => answeredNames.includes(name));
};