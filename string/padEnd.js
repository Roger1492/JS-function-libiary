/**
 * @name 填充指定长度的字符串-后。
 * @author Roger Shen
 * @version 0.1.0
 * @param {String} 原始字符串
 * @param {Number} 要填充的长度
 * @param {String} 要填充的字符串
 * @return {String} 返回填充后的字符串
 */

function padEnd(OriginString, padLength, padString) {

    if(padString === undefined){
        return "Error: 填充字符串字符串为undefined";
    }
    if(padString === ""){
        return "Error: 填充字符串字符串为空";
    }

    let addLength = padLength - OriginString.length;
    let p = padString.repeat(Math.ceil(addLength / padString.length));
    let a = p.substr(0, addLength);
    return OriginString + a;
}

console.log(padEnd("teastg", 11, "123"));