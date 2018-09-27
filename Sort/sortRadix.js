/**
 * 
 * @name 排序算法 - 基数排序
 * 
 * @description
 * 基数排序有2种：
 * 1，MSD从高位开始排序
 * 2，LSD从低位开始排序
 * 
 * 基数排序 vs 计数排序 vs 桶排序
 * 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异
 * · 基数排序：根据键值的每位数字来分配桶
 * · 计数排序：每个桶只存储单一键值
 * · 桶排序：每个桶存储一定范围的数值
 * 
 * @param {Array}
 * @return {Array}
 */

var counter = [];
function sortRadix(arr, maxDigit) {
    let mod = 10,
        dev = 1,
        len = arr.length;

    for (let i = 0; i < maxDigit; i++ , dev *= 10, mod *= 10) {
        for (let j = 0; j < len; j++) {
            let bucket = parseInt((arr[j] % mod) / dev);
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }

        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}


// 示例
let a = [16, 11, 3, 6, 10, 1, 2, 8, 5, 6, 4];
console.log(sortRadix(a, 5));