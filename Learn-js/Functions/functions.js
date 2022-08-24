// print numbet from 1 to 10
function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
/*printNumber();*/

//2D array

var arr = [
    [1, 2]
    , [3, 4]
    , [5, 6]
];
function printarray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr[i][j]);
        }
    }
}

//Print Even numbers

var arr_3 = [13, 23, 12, 45, 22, 48, 66, 100]

function printEven(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i])
        }
    }
}

//Xoa tat ca Su xuat hien cua phan tu mang da cho
var arr_4 = [23, 56, 4, 78, 5, 63, 45, 210, 56];

function xoaphantu(arr,index){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==index){
            arr.splice(i,1);
        }
    }
    return arr; //TRA VE MANG SAU KHI XOA PHAN TU
}

var bienxoa=xoaphantu(arr_4,56);
console.log(bienxoa);

//Tinh LUY THUA
function LuyThua(number,pow){
    var res=1;
    for(var i=0;i<pow;i++){
        res=res*number;
    }
    return res;
}

//Binh Phuong 1 so
function binhphuong(num){
    return num*num;
}
bien_2=binhphuong(5);
console.log(bien_2);

//Chuyen do C dang do f
function chuyendoi(num){
    return(num*9/5)+32;
}
console.log('C->F : '+chuyendoi(0))

//Dien Tich Hinh Chu Nhat
function DTICHHCN(a,b){
    return `The area of rectangle is ${a*b}`;
}
console.log(DTICHHCN(5,6));

bien_1=LuyThua(5,6);
console.log(bien_1);
//printEven(arr_3);
//printarray(arr);


