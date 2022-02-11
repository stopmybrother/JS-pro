// У нас есть объект salaries с зарплатами.

// Создайте функцию topSalary(salaries), которая принимает объект и возвращает ИМЯ самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

interface IObjSalaries2 {
	John: number;
	Pete: number;
	Mary: number;
}

let salaries2: IObjSalaries2 = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

// 1 - first way

const getTopSalary1 = (obj: IObjSalaries2): string | null => {
	let maxSalary:number = 0;
	let nameOfEmployee: string | null = null;
	
	for (let [key, value] of Object.entries(obj)) {
		if (value > maxSalary) {
			maxSalary = value;
			nameOfEmployee = key;
		}
	}
	return nameOfEmployee;
};

console.log(getTopSalary1(salaries2)); // Pete

// 2 - second way - reduce

const getTopSalary2 = (obj: IObjSalaries2): string | null => {
    let array: number[] = Object.values(obj);

    let maxSalary: number = array.reduce((prev: number, value: number): number => prev > value ? prev : value);
    let nameOfEmployee: string | null = null;

    for (let key in obj) {
        if (obj[key] === maxSalary) {
            nameOfEmployee = key;
        }
    }
    return nameOfEmployee;
};

console.log(getTopSalary2(salaries2)); // Pete