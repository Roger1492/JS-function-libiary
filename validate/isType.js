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
    case "[object Number]" : return "number" ;
    case "[object Boolean]" : return "boolean" ;
    case "[object String]" : return "string" ;
    case "[object Undefined]" : return "underfined" ;
    case "[object Null]" : return "null" ;
    case "[object Date]" : return "date" ;
    case "[object Error]" : return "error" ;
    case "[object RegExp]" : return "regExp" ;
    case "[object Function]" : return "function" ;
    case "[object Object]" : return "object" ;
    case "[object Array]" : return "array" ;
    case "[object Math]" : return "math" ;
    case "[object JSON]" : return "json" ;
    case "[object Set]" : return "set" ;
    case "[object Map]" : return "map" ;
    case "[object WeakSet]" : return "weakSet" ;
    case "[object WeakMap]" : return "weakMap" ;
    default: return "Wrong type";
  }
}