//1) написать функцию, которая принимает в качестве первого аргумента объект типа IObject1 или IObject2 или IObject3, и в качестве второго аргумента строку. И проверяет, является ли данная строка ключом переданного объекта
interface IObject1 {
    name: string,
    age: number,
};
interface IObject2 {
    keyOne: string,
    keyTwo: string,
};
interface IObject3 {
    name: string,
    profession: string,
};

let obj1: IObject1 = {
    name: "Linda",
    age: 34,
};
let str1: string = "name";

let obj2: IObject2 = {
    keyOne: "valueOne",
    keyTwo: "valueTwo",
};
let str2: string = "keyThree";

let obj3: IObject3 = {
    name: "JB",
    profession: "engeneer",
};
let str3: string = "professionn";


function checkKey<T> (obj: T, str: string): boolean {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
    }
    return false;
};
console.log(checkKey<IObject1 | IObject2 | IObject3>(obj1, str1)); // true
console.log(checkKey<IObject1 | IObject2 | IObject3>(obj2, str2)); // false
console.log(checkKey<IObject1 | IObject2 | IObject3>(obj3, str3)); // false