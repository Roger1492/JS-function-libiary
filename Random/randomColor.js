/**
 * @description 随机生成颜色
 * @return {String}
 */
function randomColor() {
    return '#' + Math.floor(Math.random() * (1 << 24).toString(16));
}