// Напишите функцию count(obj), которая принимает объект и возвращает количество свойств объекта:

interface IObjPerson {
	name: string;
	age: number;
	gender?: string;
}

let user1: IObjPerson = {
	name: "John",
	age: 30,
};
let user2: IObjPerson = {
	name: "John",
	age: 30,
	gender: 'male'
};

// 1 - first way


let countKeys1 = (obj: IObjPerson): number => {
	let numberOfKeys: number = Object.keys(obj).length;
	return numberOfKeys;
};

console.log(countKeys1(user1)); // 2
console.log(countKeys1(user2)); // 3

// 2 - second way


const countKeys2 = (obj: IObjPerson): number => {
    let counter: number = 0;
	for (let key in obj) {
		counter = counter + 1;
	}
    return counter;
};

console.log(countKeys1(user1)); // 2
console.log(countKeys1(user2)); // 3

// 3 - third way - reduce

let countKeys3 = (obj: IObjPerson): number => {
    let array: string[] = Object.keys(obj);

    let numberOfKeys: number = array.reduce((prev: number, curr: string, index: number): number => {
        if (curr[index]) {
            prev = prev + 1;
            return prev;
        } else {
            return 0;
        }
    }, 0)
    return numberOfKeys;
};

console.log(countKeys1(user1)); // 2
console.log(countKeys1(user2)); // 3