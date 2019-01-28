/**
 * 
 * @description 浅拷贝
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Object}
 * 
 */

function shadowCopy(obj){

  if(typeof obj !== 'object') return;
  
  // 根据obj的类型判断是新建一个数组(array)还是对象(objct).
  let dest = obj instanceof Array ? [] : {};

  for(let o in obj){
    if(obj.hasOwnProperty(o)){
      dest[o] = obj[o];
    }
  }
  return dest;
}