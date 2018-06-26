/**
 * @name 二维数组一维化(扁平化)
 * @description 二维数组一维化(扁平化)
 * @author Roger Shen
 * @version 0.2
 * 
*/

if(!Array.prototype.flat){
    Array.prototype.flat = function(){
        return this.reduce((a,b) => a.concat(b));
    };
}
console.log([[1,2,3],[6,7,8]].flat());