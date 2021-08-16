// Write your solution in this file!

let employee = {}

employee.name = "Sam";


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign({}, employee, {[key]: value});
    return newObject;
}

/*
the above can pass the test with different solutions 

//01
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

//02
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee});
    newObject[key] = value;
    return newObject;
}
*/



function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign (employee, {[key]: value});
}

/*
the above can pass the test with different solutions

//01
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign(employee, {[key]: value});
    return newObject;
}

//02
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
}
*/



function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject['name'];
    return newObject;
}



function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}