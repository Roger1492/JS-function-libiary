/**
 * @description 数组求和
 * @param {Array}
 * @return {Number}
 */

 function sum(arr){
    let s = 0;
     for(let i = 0; i < arr.length; i++){
        s += arr[i];
     }
     return s;
 }

 console.log(sum([1,2,3,4,5,6,7,8]));