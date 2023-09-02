import { writable } from 'svelte/store';

const useFade = (callback?: () => void, duration = 1000) => {
	const isShowStore = writable(false);

	setTimeout(() => {
		isShowStore.set(true);
	}, duration);

	const enhanceCallback = () => {
		isShowStore.set(false);

		setTimeout(() => {
			if (callback) callback();
		}, duration);
	};

	return { isShowStore, enhanceCallback };
};

export default useFade;
