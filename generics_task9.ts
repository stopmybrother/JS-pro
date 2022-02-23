// 9) написать функцию, которая добавить индекс каждому объекту в массиве из IOld к INew
interface IOld {
    name: string;
}

interface INew {
    name: string;
    id: number;
}

let array: IOld[] = [
    {
        name: "Kenny",
    },
    {
        name: "Brad",
    },
    {
        name: "Pit",
    }
];

function pushKeyInObj<A>(array: A[]): INew[] {
    let newArray: INew[] = [...array].map((item: A , index: number): INew => {
        item.id = index + 1;
        return item;
    })
    return newArray;
}
console.log(pushKeyInObj<IOld>(array)); //[{"name": "Kenny", "id": 1}, {"name": "Brad", "id": 2}, {"name": "Pit", "id": 3}] 