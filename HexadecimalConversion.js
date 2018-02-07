/**
 * @desc 字符串转换为二进制值
 * @param {str}
 * @return {arr}
 */
function strToBin(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i].charCodeAt().toString(2));
    }
    return arr;
}


/**
 * @desc 十进制转换为二进制
 * @param {Number}
 * @return {Binary}
 */
function octToBin(num){
    return parseInt(num).toString(2);
}


/**
 * @desc 二进制转换为十进制
 * @param {Binary}
 * @return {Number}
 */
function binToOct(bin){
    return parseInt(bin,2);
}
