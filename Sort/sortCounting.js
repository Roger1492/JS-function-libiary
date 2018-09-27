/**
 * 
 * @name 排序算法 - 计数排序
 * 
 * @description
 * 计数排序的核心在于将输入的数据值转化为键存储在开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 * 
 * @param {Array}
 * @param {Number}
 * @return {Array}
 */

function sortCounting(arr, maxValue){
    let bucket = new Array(maxValue+1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketLen = maxValue + 1;
    
    for(let i = 0; i < arrLen; i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for(let j = 0; j < bucketLen; j++){
        while(bucket[j] > 0){
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortCounting(a,20));