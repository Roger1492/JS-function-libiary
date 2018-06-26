/**
 * @name 统计数组中相同元素出现的次数
 * @description 统计数组中相同元素出现的次数。使用Polyfill的方式实现。
 * @author Roger Shen
 * @version 0.2
 * @return {Object} 输出重复字符出现的次数
 */

if(!Array.prototype.repeatCount){
    Array.prototype.repeatCount = function(){
        return this.reduce((allNames, name) => {
            if(name in allNames){
                allNames[name]++;
            } else {
                allNames[name] = 1;
            }
            return allNames;
        }, {});
    };
}
console.log(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'].repeatCount());