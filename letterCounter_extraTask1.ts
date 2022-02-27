//нужно написать функцию letterCounter, которая принимает в себя любое слово и как результат выводит объект, в котором каждая буква слово - ключ, а значение - количество повторов данной буквы в этом слове
// например для слова "дата" это будет - { д: 1, а: 2, т: 1 } с помощью метода reduce
interface IObj {
    [key: string]: number;
}
const string1: string = "data";
const string2: string = "ddaaaattta";

const letterCounter = (str: string): IObj => {
    return str.split("").reduce((prev: IObj, item: string) => {
        return prev[item] ? prev[item] = prev[item] + 1 : prev[item] = 1, prev;
    }, {})
}

console.log(letterCounter(string1)); // {"d": 1, "a": 2, "t": 1} 
console.log(letterCounter(string2)); // {"d": 2, "a": 5, "t": 3} 