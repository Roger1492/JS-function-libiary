/**
 * @name 获取指定长度的子字符串
 * @description 如果start为负值，start取strLength+start。其中strLength是字符串的长度。JS的内置函数里有同名的方法，所有这不是用Polyfill的方式实现的。
 * @param {String} 要截取的原始字符串
 * @param {Number} 字符串开始的位置
 * @param {Number} 要获取字符串的长度(length)
 * @return {String}
 */

function substr(str, start, lng) {
    let s = "";
    if (start < 0) {
        let f = start + str.length;
        for (let i = f; i < f+lng; i++) {
            s += str[i];
        }
        return s;
    } else {
        for (let i = start; i < start + lng; i++) {
            s += str[i];
        }
        return s;
    }
}

console.log(substr("Hello,world", -7, 4));