/**
 * @name 颠倒字符串的位置
 * @description 颠倒字符串的位置
 * @author Roger Shen
 * @version 0.2
 */

// 第一种实现方法
if(!String.prototype.reverse){
    String.prototype.reverse = function(){
        let s = "";
        for(let i = this.length-1; i >= 0; i--){
            s += this[i];
        }
        return s;
    };
}

console.log(("String, Hello").reverse())