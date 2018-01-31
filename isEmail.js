/**
 * @desc 判断是否为Email地址
 * @param {String}
 * @return {Boolean}
 */
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
