/**
 * @description 逆转字符串
 * @author Roger Shen
 * @version 0.1
 * @param {String}
 * @return {String}
 * 
 * @example
 * => console.log(reverse("String, Hello"))
 * => olleH ,gnirtS
 */

function reverse(str){
    let s = '';
    let r = str.split('').reverse();
    for(let i in r){
        s += r[i];
    }
    return s;
}