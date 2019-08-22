/**
 * @description 深拷贝
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @param {Object}
 * @return {Object}
 */

function deepCopy(src){
  if(typeof src !== 'object') return;
  let dest = src instanceof Array ? [] : {};

  for(let prop in src){
    if(src.hasOwnProperty(prop)){
      dest[prop] = typeof src[prop] === 'object' ? deepCopy(src[prop]) : src[prop];
    }
  }
  return dest;
}

// var o = {
//   name: 'Roger',
//   age: 22,
//   arr: [1,2,3,4,5]
// };

// var n = deepCopy(o);

// 修改其中一项，不会改变其他变量。新旧变量指向两个完全不同的变量。

// o.name = 'Lewis';
// console.log(n);
// console.log(o);

// o.arr[2] = '三';
// console.log(n);
// console.log(o);