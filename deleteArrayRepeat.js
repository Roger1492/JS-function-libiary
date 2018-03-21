/**
 * @desc 数组去重
 * @param {Array}   输入原始数组
 * @return {Array}  输出去重后的数组
 */

 // 第一种方法 for
function deleteArrayRepeat(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 第二种方法 forEach
function deleteArrayRepeat(arr){
    let newArr = [];
    arr.forEach((ele,index,arr) => {
        if(newArr.indexOf(arr[index]) === -1){
            newArr.push(arr[index]);
        }
    });
    return newArr;
}

// 第三种方法 ES6数组解构
function deleteArrayRepeat(arr){
    return Array.from(new Set(arr));
}
console.log(deleteArrayRepeat([2,2,3,3,4,5,6,7,1,4,3]))