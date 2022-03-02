// 1) https://www.typescriptlang.org/docs/handbook/2/objects.html

export interface User {
    name: string;
    age: number;
    occupation: string;
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
];

export function logPerson(user: User): void {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:'); // "Users:"
users.forEach(logPerson); // " - Max Mustermann, 25", " - Kate Müller, 23"