/**
 * @desc 排序算法 - 冒泡排序
 * @param {Array}
 * @return {Array}
 */

function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];     // 使用解构方法对换两个值，不需要临时变量。
            }
        }
    }
    return arr;
}

let a = [16,11,3,6,10,1,2,8,5,6,4];
console.log(bubbleSort(a));
