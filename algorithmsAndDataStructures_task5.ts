//задача 5 - на рекурсивный обход
//Дана структура компании, представляющая собой отделы и входящих в эти отделы сотрудников.
interface IObj {
    [key: string]: any;
}

let company: IObj = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
};

//Нужно написать функцию, которая сможет рассчитать сумму зп всех сотрудников во всех отделах.
const getSalaries = (obj: IObj): number => {
    let sum: number = 0;
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((item: IObj) => {
                sum = sum + item.salary
            })
        } else {
            sum = sum + getSalaries(obj[key]);
        }
    }
    return sum;
}
console.log(getSalaries(company)); // 6700

//Нужно написать функцию, которая выведет одной строкой имена всех сотрудников во всех отделах через пробел.

const getNamesOfEmployees = (obj: IObj): string => {
    let str: string = "";

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach((item: IObj) => {
                str += item.name + " ";
            })
        } else {
            str = str + getNamesOfEmployees(obj[key]);
        }
    }
    return str.trim();
}
console.log(getNamesOfEmployees(company)); // "John Alice Peter Alex Jack"