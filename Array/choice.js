/**
 * @name 在数组随机选择一个元素
 * @description 在数组随机选择一个元素
 * @author Roger Shen
 * @version 0.1
 */

if(!Array.prototype.choice){
    Array.prototype.choice = function(){
        let len = this.length;
        return this[Math.floor(Math.random() * len)];
    };
}

console.log(["Lewis","Roger","Jim","Tom","Jack","John"].choice());