/**
 * @description 浅拷贝
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Object}
 */

function shadowCopy(src){
  if(typeof src !== 'object') return;
  // 根据obj的类型判断是新建一个数组(array)还是对象(objct).
  let dest = src instanceof Array ? [] : {};

  for(let prop in src){
    if(src.hasOwnProperty(prop)){
      dest[prop] = src[prop];
    }
  }
  return dest;
}

// var o = {
//   name: 'Roger',
//   age: 22,
//   arr: [1,2,3,4,5]
// };

// var n = shadowCopy(o);

// 改变第一层: 改变其中一个变量，不会影响其他变量。
// o.name = 'Lewis';
// console.log(n);
// console.log(o);

// 改变第二层： 改变其中一个变量，会影响其他变量。因为指针还是指向同一个对象。
// o.arr[2] = '三';
// console.log(n);
// console.log(o);