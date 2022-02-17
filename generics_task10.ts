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
function deleteKeyFromObj<A, B>(array: A[]): B[] {
    let newArray: B[] = [...array].map((item: A): B => {
        delete item.age;
        return item;
    })
    return newArray;
}
console.log(deleteKeyFromObj<IWithExtraProp, IWithoutAge>(arr)); // [{"name": "Kenny"}, {"name": "Brad"}, {"name": "Pit"}] 