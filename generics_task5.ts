//5) написать функцию, которая принимает 2 объекта и возвращает их смерженными в один ??????? ЗАЧЕМ
interface IFirstObj {
    name: string;
    age: number;
};
interface ISecondObj {
    child: string;
    childAge: number;
};

const firstObj: IFirstObj = {
    name: "Randy",
    age: 27,
};
const secondObj: ISecondObj = {
    child: "Theo",
    childAge: 5,
};

function mergeObjects<A extends Record<string, any>, B extends Record<string, any>> (obj1: A, obj2:B): A & B {
    return Object.assign(obj1, obj2);
}

console.log(mergeObjects<IFirstObj, ISecondObj>(firstObj, secondObj));