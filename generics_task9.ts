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

function pushKeyInObj<A, B>(array: A[]): B[] {
    let newArray: B[] = [...array].map((item: A, index: number): B => {
        item.id = index + 1;
        return item;
    })
    return newArray;
}
console.log(pushKeyInObj<IOld, INew>(array)); //[{"name": "Kenny", "id": 1}, {"name": "Brad", "id": 2}, {"name": "Pit", "id": 3}] 