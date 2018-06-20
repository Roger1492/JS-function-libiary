/**
 * @name 返回指定子string在stirng中的索引
 * @description 返回指定子string在stirng中的索引
 * @author Roger Shen 
 * @version 0.1
 * @param {String} 字符串
 * @param {String} 子字符串
 * @param {Number} 索引开始的位置
 * @return {Number} 返回索引
 */

// TODO: 如果fromIndex大于返回值的话，会有问题。
function indexOf(str, substr, fromIndex) {
    if(typeof fromIndex !== "number"){
        fromIndex = 0;
    } else {
        str = str.substr(fromIndex);
    }

    return RegExp(substr, "g").exec(str).index;
}

console.log(indexOf("Hello,world", "e", 3))