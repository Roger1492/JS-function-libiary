/**
 * @desc 统计重复出现的次数
 * @param {String} 输入字符串
 * @param {Array}  输入数组
 * @return {Object} 输出重复字符出现的次数
 */

 // 第一种实现方法，统计字符串中相同字符出现的次数
 function repeatCount(str){
     return str.split('').reduce((p,k) => (p[k]++ || (p[k] = 1), p),{})
 }
 
// 第二种方法，统计数组中相同字符串出现的次数
function repeatCount(arr){
    return arr.reduce(function(allNames, name){
        if(name in allNames){
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {})
}
console.log(repeatCount(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']))