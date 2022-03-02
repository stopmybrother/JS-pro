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

function pushKeyInObj<A>(array: A[], key: string): (A & { [key: string]: number })[] {
    return array.map((item: A , index: number) => ({
        ...item, [key]: index + 1
    }))
}
console.log(pushKeyInObj<IOld>(array, 'id')); //[{"name": "Kenny", "id": 1}, {"name": "Brad", "id": 2}, {"name": "Pit", "id": 3}] 