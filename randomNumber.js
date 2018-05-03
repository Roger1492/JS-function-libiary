/**
 * @desc 随机生成指定范围内的数字
 * @param {Number1} 区间最小值min
 * @param {Number2} 区间最大值max
 * @return {String}
 */
function randomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

// 示例
console.log(randomNumber(10, 40));