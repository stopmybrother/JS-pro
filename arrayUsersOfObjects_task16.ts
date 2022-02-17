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

//     2. Подсчитать общее количество машин у пользователей
const getNumberOfCars = (array: IUser[]): number => {
    let newArr: string[] = [...array].reduce((prev, item) => {
        if (item.cars) {
            prev.push(item.cars);
        }
        return prev.flat();
    }, [])
    return (newArr.length);
}
console.log(getNumberOfCars(users)); // 3

//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const getUsersWithAducation = (array: IUser[]): IUser[] => {
    return [...array].filter((item: IUser) => item.hasEducation);
}
console.log(getUsersWithAducation(users));

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const getUsersWithPets = (array: IUser[]): IUser[] => {
    return [...array].filter((item: IUser) => item.animals);
}
console.log(getUsersWithPets(users));

//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const getCarsOfUsers = (array: IUser[]): string => {
    let strOfUniqCars: string = [...array].reduce((prev, item) => {
            if (item.cars) {
                prev.push(item.cars);
            }
            return prev.flat();
        }, [])
        .filter((item: string, index: number, array) => array.indexOf(item) === index)
        .join(", ")
    return strOfUniqCars;
}
console.log(getCarsOfUsers(users));