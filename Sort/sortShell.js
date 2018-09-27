/**
 * @description 排序算法 - 希尔排序
 * @param {Array}
 * @return {Array}
 */

 function sortShell(arr){
     
    let len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3){
        gap = gap * 3 + 1;
    }

    for(gap; gap > 0; gap = Math.floor(gap/3)){
        for(let i = gap; i < len; i++){
            temp = arr[i];
            for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
 }


 // 示例：
var a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortShell(a));