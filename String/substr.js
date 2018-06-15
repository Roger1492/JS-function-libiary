/**
 * @description 获取指定长度的子字符串
 * @param {String} 
 * @param {Number} 字符串开始的位置
 * @param {Number} 要获取字符串的长度
 * @return {String}
 */

// TODO:
function substr(str, start, lng) {
    let s = "";
    if (start < 0) {
        let f = start + str.length;
        for(let i = f; i <= lng; i++){
            s += str[i];
        }
        return s;
    } else {
        for (let i = start; i <= lng; i++) {
            s += str[i];
        }
        return s;
    }
}

console.log(substr("Hello,world", 2, 4));