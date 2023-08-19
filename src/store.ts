import { writable } from 'svelte/store';

export const avatar = writable('');
export const name = writable('');
export const birthDate = writable('');

export enum Choice {
	VERY_LITTLE,
	LITTLE,
	MEDIUM,
	MUCH
}

export type Answer = {
	name: string;
	choice: Choice;
};

export const answers = writable<Answer[]>([]);
