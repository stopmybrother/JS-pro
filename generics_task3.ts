//3) написать типизированную обертку над Object.keys() (то есть его функционал с нуля, как мы делали с map и reduce)
interface IObj {
    name: string;
    age: number;
    animals: string;
}

const obj: IObj = {
    name: "Ally",
    age: 19,
    animals: "dog",
};

function getKeys<O>(obj: O): (keyof O)[] {
    let arr: (keyof O)[] = [];
    for (let key in obj) {
        arr.push(key);
    };
    return arr;
}

console.log(getKeys<IObj>(obj));