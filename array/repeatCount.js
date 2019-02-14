/**
 * @description 统计数组中相同元素出现的次数。使用Polyfill的方式实现。
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array}
 * @return {Object} 输出重复字符出现的次数
 * '@example
 * => console.log(repeatCount(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']));
 * => { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
 */

function repeatCount(arr) {
    return arr.reduce((a, b) => {
        if (b in a) {
            a[b]++;
        } else {
            a[b] = 1;
        }
        return a;
    }, {})
}