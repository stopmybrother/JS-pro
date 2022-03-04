//задача 4* - на рекурсивный обход

const optionsList = {
    value: "Список",
    id: "common-options-list",
    children: [
        {
            value: "Список 1",
            id: "1-option-list",
            children: [
                {
                    value: "Список 12",
                    id: "12-option-list"
                },

                {
                    value: "Список 22",
                    id: "22-option-list",
                    children: [
                        {
                            value: "Список 123",
                            id: "123-option-list"
                        },

                        {
                            value: "Список 223",
                            id: "223-option-list"
                        },

                        {
                            value: "Список 323",
                            id: "323-option-list"
                        }
                    ]
                },

                {
                    value: "Список 32",
                    id: "32-option-list"
                }
            ]
        },

        {
            value: "Список 2",
            id: "2-option-list"
        },
        
        {
            value: "Список 3",
            id: "3-option-list"
        },
    ]
};

// написать функцию, которая принимает 2 аргумента: структуру данных и id, по которому нужно удалить объект внутри
//этой структуры. Эта функция должна удалить объект по id на любом уровне вложенности структуры и вернуть НОВУЮ
//структуру, но уже без него.

const deleteObjFromStructureById = (obj, id) => {
    let newObj = {};
    for (let key in obj) {
        if (obj.id !== id && key !== "children") {
            newObj[key] = obj[key];
        }
        if (obj.id !== id && key === "children") {
            newObj[key] = obj[key]
                .map((item) => {
                    if (item.id !== id) {
                        return deleteObjFromStructureById(item, id);
                    }
                })
                .filter((item) => typeof item !== "undefined");
        }
    }
    return newObj;
}

console.log(deleteObjFromStructureById(optionsList, "common-options-list")); // okay
console.log(deleteObjFromStructureById(optionsList, "1-option-list")); // okay
console.log(deleteObjFromStructureById(optionsList, "22-option-list")); // okay

// написать функцию, которая принимает 3 аргумента: 
    // - структуру данных, 
    // - id объекта, в children которого надо вставить новый объект
    // - и саму структуру этого нового объекта, который помещается в children. 
//Эта функция должна найти объект по id на любом уровне вложенности структуры 
//добавить ему в children переданный объект,
//и вернуть НОВУЮ структуру уже с ним в составе.

const newObj = {
    value: "Список NEW",
    id: "NEW-option-list"
}

const getNewStructure = (structure, id, obj) => {
    let newStructure = {};

    for (let key in structure) {
        if (structure.id === id && key === "children") {
            newStructure[key] = structure[key].push(obj);
        }
        if (structure.id !== id && key === "children") {
            newStructure[key] = structure[key]
                .map((item) => {
                    return getNewStructure(item, id, obj);                    
                })
        }
        newStructure[key] = structure[key];
    }

    return newStructure;
}

console.log(getNewStructure(optionsList, "22-option-list", newObj)); //okay


