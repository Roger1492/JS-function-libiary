/**
 * @description 生成指定范围内的随机数
 * @param {Number} min
 * @param {Number} max
 * @return {Number} result
 */

// 因为涉及边界问题，这个方法有4种是实现情况

 // 第一种 min <= r <== man 包含最大值和最小值
 function randomNumberBoth(min,max){
    return Math.round(Math.random() * (max-min) + min);
 }
 
 // 第二种 min <= r < max 包含最小值，不包含最大值
 function randomNumberLeft(min, max){
     return Math.floor(Math.random() * (max-min) + min);
}

// 第三种 min < r <= max 包含最大值，不包含最小值
function randomNumberRight(min, max){
    if(Math.round(Math.random() * (max-min) == 0)){
        return min + 1;
    }
    return Math.round(Math.random() * (max-min) + min);
}

// 第四种 min < r < max 不包含最大值，不包含最小值
function randomNumber(min, max){
    // TODO:
}

console.log(randomNumberLeft(10,20));
