/**
 * @desc 判断是否为IP地址
 * @param {String}
 * @return {Boolean}
 */
function isIP(str) {
    return /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/.test(str);
}
