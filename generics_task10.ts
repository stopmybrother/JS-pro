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
function deleteKeyFromObj<A>(array: A[]): IWithoutAge[] {
    let newArray: IWithoutAge[] = [...array].map((item: A): IWithoutAge => {
        delete item.age;
        return item;
    })
    return newArray;
}
console.log(deleteKeyFromObj<IWithExtraProp>(arr)); // [{"name": "Kenny"}, {"name": "Brad"}, {"name": "Pit"}] 