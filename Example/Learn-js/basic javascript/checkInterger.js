var arr=[-1,2,-2,3,-3,4,5,-10,6,-6,7,-7];
var checkInterger = (value)=>{
    for(let i=0;i<value.length;i++){
        if(Number.isInteger(value[i]) && value[i]>0){
            console.log(value[i])
        }
    }
}
checkInterger(arr);

var checkNegative = (value)=>{
    for(let i=0;i<value.length;i++){
        if(Number.isInteger(value[i])&& value[i]<0){
            console.log(value[i])
        }
    }
}
checkNegative(arr);