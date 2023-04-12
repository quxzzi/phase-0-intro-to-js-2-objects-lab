// Write your soluti{on in this file!
const employee = {}
employee.name = "kevin"
employee.streetAddress = "12 Main"
function updateEmployeeWithKeyAndValue (employee, key, value){
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;
}