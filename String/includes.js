/**
 * @name 判断一个字符串是否在另一个字符串中
 * @description 判断一个字符串是否在另一个字符串中
 * @version 0.1
 * @author Roger Shen
 * @param {String} 字符串
 * @param {String} 子字符串
 * @param {Number} 开始的位置
 * @return {Boolean} 返回true or false
 */

function includes(str, substr, fromIndex) {
    if (typeof fromIndex !== 'number') {
        fromIndex = 0;
    } else {
        str = str.substr(fromIndex);
    }

    if (RegExp(substr, "g").test(str)) {
        return "this is true";
    } else {
        return "this is false";
    }
}

console.log(includes("Hello,world", "llo", 3));