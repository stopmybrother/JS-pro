// У нас есть объект salaries с зарплатами.

// Создайте функцию topSalary(salaries), которая принимает объект и возвращает ИМЯ самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

interface keyValue4 {
	John: number;
	Pete: number;
	Mary: number;
}

let salaries: keyValue4 = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

const getTopSalary = (obj: keyValue4): string | null => {
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

console.log(getTopSalary(salaries)); // Pete