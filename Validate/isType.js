/**
 * 
 * @description 判断类型
 * @author Roger Shen
 * @version 0.1.0
 * @param {*} t 
 * @return {String}
 * 
 */
function isType(t){
  let tp = Object.prototype.toString.call(t);
  switch(tp){
    case "[object Number]" : return "number" ; break;
    case "[object Boolean]" : return "boolean" ; break;
    case "[object String]" : return "string" ; break;
    case "[object Undefined]" : return "underfined" ; break;
    case "[object Null]" : return "null" ; break;
    case "[object Date]" : return "date" ; break;
    case "[object Error]" : return "error" ; break;
    case "[object RegExp]" : return "regExp" ; break;
    case "[object Function]" : return "function" ; break;
    case "[object Object]" : return "object" ; break;
    case "[object Array]" : return "array" ; break;
    case "[object Math]" : return "math" ; break;
    case "[object JSON]" : return "json" ; break;
    case "[object Set]" : return "set" ; break;
    case "[object Map]" : return "map" ; break;
    case "[object WeakSet]" : return "weakSet" ; break;
    case "[object WeakMap]" : return "weakMap" ; break;
    default: return "Wrong type";
  }
}