//Напишите функцию isEmpty(obj), которая принимает в себя объект и возвращает true, если у объекта нет свойств, иначе false.

interface keyValue {
    keyOne?: string;
    keyTwo?: string;
}

// 1 - first way

let emptyObj: keyValue = {};
let fullObj: keyValue = {
	keyOne: "valueOne",
	keyTwo: "valueTwo",
};

const getEmptyObject = (obj: keyValue): boolean => {
	if (Object.keys(obj).length > 0) {
		return false;
	} else {
		return true;
	}
};

console.log(getEmptyObject(emptyObj)); //true because the emptyObj-object is empty
console.log(getEmptyObject(fullObj)); //false because there are keys in the fullObj object

// 2 - second way

let emptyObj2: keyValue = {};
let fullObj2: keyValue = {
	keyOne: "valueOne",
	keyTwo: "valueTwo",
};
const getEmptyObject2 = (obj: keyValue): boolean => {
	for (let key in obj) {
		return false;
	}
	return true;
};

console.log(getEmptyObject2(emptyObj2)); //true because the emptyObj-object is empty
console.log(getEmptyObject2(fullObj2)); //false because there are keys in the fullObj object