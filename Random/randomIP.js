/**
 * @desc 随机生成一个IP地址
 * @return {String}
 */
function randomIP() {
    var r1 = Math.floor(Math.random() * 256);
    var r2 = Math.floor(Math.random() * 256);
    var r3 = Math.floor(Math.random() * 256);
    var r4 = Math.floor(Math.random() * 256);
    return r1 + '.' + r2 + '.' + r3 + '.' + r4;
}

// 示例
console.log(randomIP());