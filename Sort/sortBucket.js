/**
 * 
 * @name 排序算法 - 桶排序
 * 
 * @description
 * 桶排序是计数排序的升级版。他利用了
 * 
 * @param {Array}
 * @return {Array}
 */

// TODO: 有错误在 :40

function sortBucket(arr, bucketSize) {
    if(arr.length === 0){
        return arr;
    }

    let i;
    let len = arr.length;
    let minValue = arr[0];
    var maxValue = arr[0];
    for(let i = 1; i < len; i++){
        if(arr[i] < minValue){
            minValue = arr[i];      // 输入数据的最小值
        } else {
            maxValue = arr[i];      // 输入数据的最大值
        }
    }

    // 桶的初始化
    let DEFAULT_BUCKET_SIZE = 5;    // 设置桶的默认数量是5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for(i = 0; i < buckets.length; i++){
        buckets[i] = [];
    }

    // 利用映射函数将数据分配到各个桶中
    for(i = 0; i < arr.length; i++){
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for(i = 0; i < buckets.length; i++){
        sortInsertion(buckets[i]);                  // 对每个桶进行排序，使用插入排序
        for(let i = 0; j < buckets[i].length; j++){
            arr.push(buckets[i][j]);
        }
    }
    return arr;
}

function sortInsertion(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortBucket(a, 10));