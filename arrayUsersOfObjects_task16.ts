interface IUser {
    name: string;
    phone: string;
    email: string;
    hasChildren: boolean;
    hasEducation: boolean;
    animals?: string[];
    cars?: string[];
}

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

const users: IUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

//     1. Создать строку из имен пользователей через запятую
const getNamesOfUsers = (array: IUser[]): string => {
    let newArr = [...array].map((item: IUser) => item.name);
    let str: string = newArr.join(", ");
    return str;
}
console.log(getNamesOfUsers(users)); // "Harry Felton, May Sender, Henry Ford" 

//     2. Подсчитать общее количество машин у пользователей - NEED TO FIX !!!!!!!
const getNumberOfCars = (array: IUser[]): number => {
    let counter = 0;
    let newArr: string[][] = [];
    [...array].forEach((item: IUser) => {
        if (item.cars) {
            newArr.push(item.cars);
        }
    });

    newArr.forEach((item: string[]) => {
        counter = counter + item.length;
    })
    return counter;
}
console.log(getNumberOfCars(users)); // 3

//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const getUsersWithAducation = (array: IUser[]): IUser[] => {
    let newArr:IUser[] = [...array].filter((item: IUser) => item.hasEducation);
    return newArr;
}
console.log(getUsersWithAducation(users));

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных -  - NEED TO FIX !!!!!!!
const getUsersWithPets = (array: IUser[]): IUser[] => {
    let newArr:IUser[] = [...array].filter((item: IUser) => item.animals);
    return newArr;
}
console.log(getUsersWithPets(users));

//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const getCarsOfUsers = (array: IUser[]): string => {
    let newArrOfArr: string[][] = [];

    [...array].forEach((item: IUser) => {
        if (item.cars) {
            newArrOfArr.push(item.cars);
        }
    }); // [["bmw"], ["bmw", "audi"]] 

    let arrOfAllCars: string[] = newArrOfArr.reduce((accumulator: string[], value: string[]) => accumulator.concat(value),[]); // ["bmw", "bmw", "audi"]
    
    let arrOfUniqCars: string[] = arrOfAllCars.filter((item: string, index: number) => arrOfAllCars.indexOf(item) === index); // ["bmw", "audi"] 
    
    let strOfUniqCars = arrOfUniqCars.join(", ");
    
    return strOfUniqCars; // "bmw, audi" 
}
console.log(getCarsOfUsers(users));