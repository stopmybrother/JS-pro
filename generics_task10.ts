//10) которая удалит поле age в каждом объекте массива
interface IWithExtraProp {
    name: string;
    age: number;
}
interface IWithoutAge {
    name: string;
}

let arr: IWithExtraProp[] = [
    {
        name: "Kenny",
        age: 23,
    },
    {
        name: "Brad",
        age: 54,
    },
    {
        name: "Pit",
        age: 35,
    }
];
function deleteKeyFromObj<A>(array: A[], key: keyof A): Omit<A, keyof A>[] {
    return [...array].map((item: A) => {
        delete item[key];
        return item;
    })
}
console.log(deleteKeyFromObj<IWithExtraProp>(arr, 'age')); // [{"name": "Kenny"}, {"name": "Brad"}, {"name": "Pit"}] 