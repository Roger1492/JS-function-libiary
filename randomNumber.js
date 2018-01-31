/**
 * @desc 随机生成指定范围内的数字
 * @param {Number1} min
 * @param {Number2} max
 * @return {String}
 */
function randomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
