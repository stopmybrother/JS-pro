// задача 2
//сделать из массива объектов общий сборный объект типа { id: title }, который помещал  бы в себя все значения из объектов данного массива
//const exampleArray = [{ id: 2, title: 'Two' }, { id: 3, title: 'Three' }, { id: 1, title: 'One' }];
//apper(exampleArray); // { '2': 'Two', '3': 'Three', '1': 'One' }
interface IObj1 {
    id: number,
    title: string,
}
interface IObj2 {
    [key: string]: string;
}


const arr: IObj1[] = [
    {
        id: 2,
        title: 'Two',
    },
    {
        id: 3,
        title: 'Three',
    },
    {
        id: 1,
        title: 'One',
    }
];
const getOneObj = (array: IObj1[]): IObj2[] => {
    return Object.fromEntries(
        array.map(item => [item.id, item.title])
        )
}
console.log(getOneObj(arr));