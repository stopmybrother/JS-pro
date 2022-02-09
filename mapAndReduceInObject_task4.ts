// У нас есть объект, в котором хранятся зарплаты нашей команды.

interface keyValue2 {
	John: number;
	Ann: number;
	Pete: number;
}

// а) при помощи метода reduce найдите сумму зп
let salaries: keyValue2 = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

const getSumOfSalaries = (obj: keyValue2): number => {
	let arrOfSalaries: number[] = Object.values(obj); // [100, 160, 130]

	let sumOfSalaries: number = arrOfSalaries.reduce(
		(previousValue: number, currentValue: number) => previousValue + currentValue
	); // 390

	return sumOfSalaries;
};

console.log(getSumOfSalaries(salaries)); // 390

// б) при помощи метода map дайте каждому участнику id (для этого можете использовать index)
interface keyValue6 {
    John: number;
    Ann: number;
    Pete: number;
}

interface keyValue7 {
    name: string;
    salary: number;
    id: number;
}
let salaries: keyValue6 = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

const getArray = (obj: keyValue6): void => {
	let counter: number = 0;
	let arr = Object.entries(obj).map((item) => {
		counter = counter + 1;

		let obj: keyValue7 = {
			name: item[0],
			salary: item[1],
			id: counter,
		};
		item = obj;
		return item;
	});

	console.log(arr);
};
console.log(getArray(salaries)); // [{name: John, salary: 100, id: 1}, {name: Ann, salary: 160, id: 2}}, {name: Pete, salary: 130, id: 3}]