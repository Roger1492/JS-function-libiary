/**
 * @description 类型判断
 * @author Roge Shen
 * @version 0.1.0
 * @param {*} any type
 * @return {String}
 */

var class2type = {};

'Undefined Null Boolean Number String Object Error RegExp Date Array Function Symbol'.split(' ').map(item => {
  class2type['[object ' + item + ']'] = item.toLowerCase();
})

function type(obj){

  if(obj === null){
    return obj + '';
  }

  return typeof obj === 'object' || typeof obj === 'function' ? 
        class2type[Object.prototype.toString.call(obj)] || 'object' : 
        typeof obj;
}