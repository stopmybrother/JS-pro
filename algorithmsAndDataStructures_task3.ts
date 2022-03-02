//задача 3
//дан массив чисел. нужно написать функцию, которая вернет массив,
//в котором на месте каждого из предыдущих чисел будет сумма всех оставшихся кроме него
const arr = [3, 5, 2] // [7, 5, 8]

const getNewArr = (array: number[]): number[] => {
    let sum: number = array.reduce((acc, item) => acc + item, 0)
    return array.map((item) => {
        return sum - item;
    })
}
console.log(getNewArr(arr)); // [7, 5, 8]