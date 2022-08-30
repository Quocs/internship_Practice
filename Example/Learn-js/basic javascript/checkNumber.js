//SNT
var checkPrime = (varibable) => {
    if (varibable < 2) {
        console.log(`${varibable} Khong phai la so nguyen to`);
    }
    for (let i = 2; i < (varibable - 1); i++) {
        if (varibable % i == 0) {
            console.log(`${varibable} Khong phai la so nguyen to`);
        }
    }
    console.log(`${varibable} La SNT`);
}

// So Chinh Phuong

var checkSquare = varibable => {
    let n = Math.sqrt(varibable)
    if (n * n == varibable) {
        console.log('La So Chinh Phuong');
    }
    else {
        console.log('Ko la So Chinh Phuong');
    }
}

//So Hoan Hao

var perfectNumber = varibable => {
    let sum = 0;
    for (let i = 1; i <= varibable / 2; i++) {
        if (varibable % i == 0){
            sum +=i;
        }
    }
    if(sum==varibable){
        console.log(`${varibable} la so hoan hao`);
    }else{
        console.log(`${varibable} khong phai la so hoan hao`);
    }
}
checkPrime(3);
checkSquare(8);
perfectNumber(28)