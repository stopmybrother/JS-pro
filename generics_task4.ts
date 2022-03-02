//4) написать функцию, которая возвращает случайный элемент из переданного массива
const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2: string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

function getRandomElement<A>(arr: A[]): A {
    let randomElement: number = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
};
console.log(getRandomElement<number>(array1));
console.log(getRandomElement<string>(array2));