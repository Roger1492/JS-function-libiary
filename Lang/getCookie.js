/**
 * @desc 函数getCookie
 * @param {String}
 * @return {Boolean}
 */
function getCookie(cookieName) {
    var cookie = document.cookie.replace(/\s/g, '').split(';');
    for (var i = 0; i < cookie.length; i++) {
        var tempArr = cookie[i].split('=');
        if (tempArr[0] === cookieName) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}
