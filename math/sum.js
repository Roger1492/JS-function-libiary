/**
 * @description 数组求和
 * @param {Array} 数组
 * @return {Number}
 */

// 普通方法实现
// function sum(arr){
//     let s = 0;
//      for(let i = 0; i < arr.length; i++){
//         s += arr[i];
//      }
//      return s;
//  }

// 高阶函数实现
function sum(array){
    return array.reduce((a,b) => a + b);
}