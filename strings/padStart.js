/**
 * @name 在原始字符串的前面填充指定长度的字符串。
 * @author Roger Shen
 * @version 0.1
 * @param {String} 原始字符串
 * @param {Number} 要填充的长度
 * @param {String} 要填充的字符串
 * @return {String} 返回填充后的字符串
 */

function padStart(OriginString, padLength, padString) {

    if(padString === undefined){
        return "Error: 填充字符串字符串为undefined";
    }
    if(padString === ""){
        return "Error: 填充字符串字符串为空";
    }

    let addLength = padLength - OriginString.length;
    let p = padString.repeat(Math.ceil(addLength / padString.length));
    let a = p.substr(0, addLength);
    return a + OriginString;
}

console.log(padStart("test", 11, "85"));