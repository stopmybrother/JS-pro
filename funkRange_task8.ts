const getRange = (startValue: number, endValue: number, ...step: number[]): number[] => {
	let array: number[] = [];

	let interval: number[] = step;
	// console.log(arr[0]);
	switch (true) {
        case interval.length === 0:
            for (let i:number = startValue; i <= endValue; i++) {
                array.push(i);
            }
            break;
        case (interval[0] < 0):
            for (let i: number = endValue; i <= startValue; i -= interval[0]) {
                array.push(i)
                array.sort((a, b) => b - a);
            }
            break;
		case (interval[0] > 0):
			for (let i: number = startValue; i <= endValue; i += interval[0]) {
				array.push(i);
			}
			break;
	}

	return array;
};

console.log(getRange(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getRange(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(getRange(5, 2, -1)); // [5, 4, 3, 2]

let range: number[] = getRange(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getSum = (array: number[]): number => {
	let sum: number = array.reduce(
		(firstValue: number, secondValue: number) => firstValue + secondValue,
		0
	);
	return sum;
};
console.log(getSum(range)); // 55