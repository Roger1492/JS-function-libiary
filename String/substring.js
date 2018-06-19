/**
 * @name 截取指定区间内的字符串
 * @author Roger Shen
 * @version 0.1
 * @description 截取指定区间内的字符串
 * @param {String} 要截取的原始字符串
 * @param {Number} 字符串开始的位置
 * @param {Number} 字符串结束的位置
 */

function substring(str, start, end) {
    var s = "";

    // 如果start等于end，则返回空字符串
    if (start === end) return "";

    // 如果省略end，substring提取字符串一直到结尾
    if (arguments[2] === undefined) {
        return str;
    }

    // 如果start和end中有任一参数小于0或者等于NaN，则被当做0
    if (start < 0 || start === NaN) {
        start = 0;
        for(let i = start; i < end; i++){
            s += str[i];
        }
        return s;
    }
    if(end < 0 || end === NaN){
        end = 0;
        for(let i = end; i < start; i++){
            s += str[i]
        }
        return s;
    }

    // TODO: 如果任一参数大于str.length,则被当做str.length
    // if(start > str.length){
    //     start = str.length;
    //     for(let i = start; i < end; i++){
    //         s += str[i];
    //     }
    //     return s;
    // }

    // 如果start比end大，效果就相当于调换了start和end的位置
    if(end < start){
        for(let i = end; i < start; i++){
            s += str[i];
        }
        return s;
    }

}

console.log(substring("ehoow", 4, 2));