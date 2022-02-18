// 2) https://www.typescriptlang.org/docs/handbook/2/types-from-types.html 

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: Array<User | Admin> = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver',
    },
];

export function logPerson(user: User | Admin): void {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
// " - Max Mustermann, 25" 
// " - Jane Doe, 32" 
// " - Kate Müller, 23" 
// " - Bruce Willis, 64" 
