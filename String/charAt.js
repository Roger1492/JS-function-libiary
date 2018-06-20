/**
 * @name 返回指定位置的字符串
 * @description 返回指定位置的字符串
 * @author Roger Shen
 * @version 0.1
 * @param {String}
 * @param {Number}
 * @return {String}
 */

function charAt(str, index) {
    // 如果没有索引参数，则默认为0
    if (index === undefined) {
        index = 0;
    }

    // 如果索引参数大于字符串的长度，返回空字符串
    if (index > str.length) {
        return "RangeError: 索引大于字符串的长度";
    }
    if (index < str.length) {
        return "RangeError: 索引小于字符串的长度"
    }

    return str[index];

}

console.log(charAt("Hello,world", -30));