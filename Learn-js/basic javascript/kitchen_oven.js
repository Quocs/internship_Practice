const EXPECTED_MINUTES_IN_OVER = 40;

var remainingMinutesInOven = (variable) => {
    return EXPECTED_MINUTES_IN_OVER - variable;
    //console.log(EXPECTED_MINUTES_IN_OVER - variable);
}
remainingMinutesInOven(30);

var repairationTimeInMinute = (variable) =>{
    //console.log( variable + variable)
    return variable + variable
}

repairationTimeInMinute(2);

var total = (variable1,variable2) =>{
    let variable3=remainingMinutesInOven(variable2);
    let variable4= repairationTimeInMinute(variable1);
    console.log(variable3+variable4);
}

total(3,20);
