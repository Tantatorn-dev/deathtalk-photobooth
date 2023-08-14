export const arabicToThai = (number: number): string => {
	const thaiDigits: string[] = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];

	const arabicNumber: string = number.toString();
	const thaiNumber: string = arabicNumber
		.split('')
		.map((digit) => thaiDigits[parseInt(digit)])
		.join('');

	return thaiNumber;
};

export const toThaiDate = (date: Date) => {
	const thaiMonths = [
		'มกราคม',
		'กุมภาพันธ์',
		'มีนาคม',
		'เมษายน',
		'พฤษภาคม',
		'มิถุนายน',
		'กรกฎาคม',
		'สิงหาคม',
		'กันยายน',
		'ตุลาคม',
		'พฤศจิกายน',
		'ธันวาคม'
	];

	const thaiYear = arabicToThai(date.getFullYear() + 543);
	const thaiMonth = thaiMonths[date.getMonth()];
	const thaiDay = arabicToThai(date.getDate());

	return `${thaiDay} ${thaiMonth} ${thaiYear}`;
};
