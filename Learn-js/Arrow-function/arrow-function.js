let kiemtra = num =>{
    if(num%2==0){
        console.log(`${num} la so chan`);
    }else{
        console.log(`${num} la so le`);
    }
}
//kiemtra(20);

//
var checkso =(num)=>{
    if(typeof(num)=='number'){
        console.log(`${num} la so`);
    }else{
        console.log(`${num} ko phai la so`);
    }
}
checkso('hai muoi');
checkso(20);

// let a=5;
// console.log(typeof(a));