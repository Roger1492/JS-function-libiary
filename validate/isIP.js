/**
 * @desc 是否为IP地址
 * @param {String}
 * @return {Boolean}
 * @version 0.1.0
 * @author Roger Shen
 * 
 */
function isIP(str) {
    return /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/.test(str);

    // return /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/.test(str) ? "It's IP" : "It's NOT IP";
}