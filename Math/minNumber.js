/**
 * @desc 找到一组数中的最小数
 * @param {Numbers}
 * @return {Number}
 */
function min() {
    var arr = [];
    var max;
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr.sort((a, b) => (a - b))[0];
}
