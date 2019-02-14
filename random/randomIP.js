/**
 * @description 随机生成n个IP地址
 * @param {Number}  重复次数
 * @return {String}
 */
function randomIP(rep = 1) {
    let arr = [];
    for (let i = 0; i < rep; i++) {
        var r1 = Math.floor(Math.random() * 256);
        var r2 = Math.floor(Math.random() * 256);
        var r3 = Math.floor(Math.random() * 256);
        var r4 = Math.floor(Math.random() * 256);
        arr.push(r1 + '.' + r2 + '.' + r3 + '.' + r4);
    }
    return arr;
}