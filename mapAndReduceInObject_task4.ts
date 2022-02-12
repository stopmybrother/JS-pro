// У нас есть объект, в котором хранятся зарплаты нашей команды.

interface IObjSalaries {
	John: number;
	Ann: number;
	Pete: number;
}
interface IObjEmployee {
	name: string;
	salary: number;
	id: number;
}

type TArray = [
    firstValue: string,
    secondValue: number
]

let salaries1: IObjSalaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

// а) при помощи метода reduce найдите сумму зп

const getSumOfSalaries = (obj: IObjSalaries): number => {
	let arrOfSalaries: number[] = Object.values(obj); // [100, 160, 130]

	let sumOfSalaries: number = arrOfSalaries.reduce(
		(previousValue: number, currentValue: number) => previousValue + currentValue
	); // 390

	return sumOfSalaries;
};

console.log(getSumOfSalaries(salaries1)); // 390

// б) при помощи метода map дайте каждому участнику id (для этого можете использовать index)

const getArray = (obj: IObjSalaries): void => {

	let arr = Object.entries(obj).map(([key, value]: TArray, index: number): IObjEmployee[] => {
        let newArr: IObjEmployee[] = [];

		let obj: IObjEmployee = {
			name: key,
			salary: value,
			id: index + 1,
		};

        if (obj) {
            newArr.push(obj);
        }
		return newArr;
	});

	console.log(arr);
};

console.log(getArray(salaries1)); // [{name: John, salary: 100, id: 1}, {name: Ann, salary: 160, id: 2}}, {name: Pete, salary: 130, id: 3}]