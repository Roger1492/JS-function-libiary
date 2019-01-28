/**
 * 
 * @description 深拷贝
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Object}
 * 
 */

function deepCopy(obj){
  
  if(typeof obj !== 'object') return;

  let dest = obj instanceof Array ? [] : {};

  for(let o in obj){
    if(obj.hasOwnProperty(o)){
      dest[o] = typeof obj[o] === 'object' ? deepCopy(obj[o]) : obj[o];
    }
  }
  return dest;
}