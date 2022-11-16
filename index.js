const employee={
    name:"Sam",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newObj ={...employee};
    newObj["streetAddress"]="11 Broadway";
    return newObj;

  }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["streetAddress"]="12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    var newObj={...employee};
    delete newObj["name"];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee["name"];
    return employee;
}
