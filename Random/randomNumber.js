/**
 * @description 生成指定范围内的随机数
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */

 function randomNumber(min,max){
    return Math.round(Math.random() * (max-min) + min);
 }

console.log(randomNumber(10,60));
