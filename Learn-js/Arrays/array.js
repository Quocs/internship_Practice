//Khoi tao mang
const a=[1,2,3];
const b=Array.of(1,2,3);

//Nhieu mang
const c=[[1,2,3],[4,5,6],[7,8,9]];

//Tao mang moi
const d=Array(12).fill(0);

// Chi dinh chieu dai
const array_C= [1,2,3];
array_C.length=2;
console.log(array_C);

//Them phan tu vao cuoi mang
const mang=[];
mang.push('Thanh');
mang.push('Quoc');
console.log(mang);

//Them phan thu vao dau mang
const mang2=[];
mang2.unshift(-2,-1);
console.log(mang2);
//Xoa 1 muc khoi 1 phan tu cuoi mang 
const mang3=['Quoc','Tuan','Minh','Le','Xinh'];
mang3.shift();
mang3.pop();
console.log(mang3);

//Noi Nhieu mang
const mang4=[1,2];
const mang5=[3,4];
const mang6=mang4.concat(mang5);
console.log(mang6);

//Noi Nhieu mang C2
const aa=['Thanh','Hoang'];
const bb=['Quoc','Nguyen'];
const cc=[...aa,...bb];
console.log(cc);

//Output
// console.log(a);
// console.log(b);
// console.log(c[2][2]);
// console.log(c);
// console.log(d);
