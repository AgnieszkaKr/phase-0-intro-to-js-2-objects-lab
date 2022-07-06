// Write your solution in this file!
let employee = {
    neme: "Agnieszka",
    streetAddress: "4th Street" ,
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newList = {
        ...employee,
    }
    newList[key] = value;
    return newList;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}