//Напишите функцию isEmpty(obj), которая принимает в себя объект и возвращает true, если у объекта нет свойств, иначе false.

interface IObj {
	[key: string]: string;
}

let emptyObj: IObj = {};
let fullObj: IObj = {
	keyOne: "valueOne",
	keyTwo: "valueTwo",
};

// 1 - first way

const getEmptyObject1 = (obj: IObj): boolean => {
    return !Object.keys(obj).length;
};

console.log(getEmptyObject1(emptyObj)); //true because the emptyObj-object is empty
console.log(getEmptyObject1(fullObj)); //false because there are keys in the fullObj object

// 2 - second way

const getEmptyObject2 = (obj: IObj): boolean => {
	for (let key in obj) {
		return false;
	}
	return true;
};

console.log(getEmptyObject2(emptyObj)); //true because the emptyObj-object is empty
console.log(getEmptyObject2(fullObj)); //false because there are keys in the fullObj object