var mang = [1, 5, 9, 10];

let sum_Array = (mang) => {
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        tong += mang[i];
    }
    return tong;
}
console.log(sum_Array(mang));