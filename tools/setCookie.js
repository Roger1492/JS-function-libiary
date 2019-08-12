/**
 * @description setCookie
 * @author Roger Shen
 * @version 0.1.1
 * 
 * @param {String} name Namve
 * @param {String} value Value
 * @param {Date} exdays 失效时间
 */
function setCookie(name,value,expiresDays) {
  var expires = "";
  if (expiresDays) {
      var date = new Date();
      date.setTime(date.getTime() + (expiresDays*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}