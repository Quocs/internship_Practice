class degreeEquation{
    constructor(fistNumber,secondNumber){
        this.fistNumber=fistNumber;
        this.secondNumber=secondNumber;
    }

    caculator(a,b){

    }
}

class first extends degreeEquation{
    caculator(a,b){
        if (a == 0 && b == 0){
            console.log('Phương trình vô số nghiệm');
        }
        else if (a != 0 && b == 0){
            console.log('Phương trình có nghiệm x = 0');
        }
        else if (a == 0 && b != 0){
            console.log("Phương trình vô nghiệm");
        }
        else {
            console.log('Phương trình có nghiệm x = ' + (-b/a));
        }
    }
}


var variable1= new first(-5,20);
variable1.caculator(-5,20);

