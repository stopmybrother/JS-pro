// У нас есть объект, в котором хранятся зарплаты нашей команды.

// а) при помощи метода reduce найдите сумму зп
let salaries: object = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

const getSumOfSalaries = (obj: object): number => {
	let arrOfSalaries: number[] = Object.values(obj); // [100, 160, 130]

	let sumOfSalaries: number = arrOfSalaries.reduce(
		(previousValue: number, currentValue: number) => previousValue + currentValue
	); // 390

	return sumOfSalaries;
};

console.log(getSumOfSalaries(salaries)); // 390

// б) при помощи метода map дайте каждому участнику id (для этого можете использовать index)
let salaries2: object = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

const getNewObjectWithId = (obj: object): object => {
	let objOfId: object = Object.fromEntries(
		Object.entries(obj).map(([key, value], index) => [key + 'Id', value = index + 1])

	);
	return objOfId;
};

console.log(getNewObjectWithId(salaries2)); // return new object with Id - { JohnId: 1, AnnId: 2, PeteId: 3 }