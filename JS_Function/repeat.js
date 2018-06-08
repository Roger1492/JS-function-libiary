/**
 * @desc 把任意字符串重复n次
 * @param {string}  输入字符串
 * @param {number}  输入重复的次数
 * @return {string}  返回结果
 */

function repeat(str, n) {
    let s = str.toString();
    let a = "";
    for (let i = 0; i < n; i++) {
        a += s;
    }
    return a;
}