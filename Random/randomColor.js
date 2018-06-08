/**
 * @desc 随机生成颜色
 * @param {String}
 */
function randomColor() {
    return '#' + Math.floor(Math.random() * (1 << 24).toString(16));
}
