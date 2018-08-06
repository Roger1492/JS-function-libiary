/**
 * @desc 找到一组数中的最大数
 * @param {Numbers}
 * @return {Number}
 */
function max() {
    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.sort((a, b) => (b - a))[0];
}
