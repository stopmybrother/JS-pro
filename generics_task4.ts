//4) написать функцию, которая возвращает случайный элемент из переданного массива
type TNumber = number;
type TSring = string;

const array1: TNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2: TSring[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

function getRandomElement<A>(arr: A[]): A {
    let randomElement: number = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
};
console.log(getRandomElement<TNumber | TSring>(array1));
console.log(getRandomElement<TNumber | TSring>(array2));
