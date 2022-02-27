// 6) написать функцию, чтобы получать свойство из объекта по ключу

interface IObject {
    name: string;
    surname: string;
    age: number;
    gender: string;
    email: string;
};

let obj: IObject = {
    name: "Jenna",
    surname: "Peltroy",
    age: 29,
    gender: "female",
    email: "jenna_peltroy@gmail.com"
};
let str: string = "name";
let strNotKey: string = "namee";

function showValue<T extends Record<string, any>, K extends string> (obj: T, str: K): keyof T | boolean {
    return str in obj ? obj[str] : false;
};
console.log(showValue<IObject, any>(obj, str)); // "Jenna" 
console.log(showValue<IObject, any>(obj, strNotKey)); // false 