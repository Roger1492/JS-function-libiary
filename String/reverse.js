/**
 * @description 颠倒字符串的位置
 * @param {String}
 * @return {String}
 */

function reverse(str){
    let s = "";
    let len = str.length - 1;
    for(let i = len; i >= 0; i--){
        s += str[i];
    }
    return s;
}
console.log(reverse("String, Hello"))