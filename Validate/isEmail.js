/**
 * @desc 判断是否为Email地址
 * @param {String}
 * @return {Boolean}
 * @version 0.1.0
 * @author Roger Shen
 */

function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}