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

function showValue<T extends Record<string, any>> (obj: T, str: string): keyof T | T {
    for (let key in obj) {
        if (key === str) {
            return obj[key];
        }
    }
    return obj;
};
console.log(showValue<IObject>(obj, str)); // "Jenna" 
console.log(showValue<IObject>(obj, strNotKey)); // "This key is not found." 