/**
 * @description erase cookie
 * @author Roger Shen
 * @version 0.1.1
 * 
 * @param {String} name cookie name
 * 
 */
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}