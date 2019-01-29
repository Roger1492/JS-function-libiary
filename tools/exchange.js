/**
 * 
 * @description 调换两个值的位置
 * @author Roger Shen
 * @version 0.1.0
 * @param {*}
 * @param {*}
 * @return {*}
 * 
 * @example
 * => console.log(exchange({name: 're'},{age: 22}))
 * => [ { age: 22 }, { name: 're' } ]
 * 
 * => console.log(exchange('first',22))
 * => [ 22, 'first' ]
 */

function exchange(v1, v2){
  return [v1,v2] = [v2,v1];
}

console.log(exchange('first',22))