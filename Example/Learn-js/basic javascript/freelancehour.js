const DAY_HOUR = 8;

var dayDate = (variable) => {
    return DAY_HOUR * variable;
}

var dayInBudget = (variable1, variable2) => {
    let variable3 = dayDate(variable2)
    console.log(Math.floor(variable1 / variable3));
}

dayInBudget(2000, 89)