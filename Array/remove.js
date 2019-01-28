/**
 * @description 删除数组中指定元素
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array}
 * @param {String} 要删除的元素
 * @return {Array} 新数组
 * 
 */

function remove(arr, val){
  for(let i = 0; i < arr.length; i++){
    let index = arr.indexOf(val);
    if(index > -1){
      arr.splice(index, 1);
    }
  }
  return arr;
}

var a = ['a','b','r','h','j','m','f'];
console.log(remove(a, 'j'))