/**
 * @description 删除数组中指定元素
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array} 原数组
 * @param {String, Array} 要删除的数组或者数组元素
 * @return {Array} 新数组
 * 
 * @example
 * => var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
 * => console.log(remove(a, ['b','g','j','m']))
 * => ['a','c','d','e','f','h','i','k','l','n']
 * 
 */

function remove(arrayList, arrayValue){
  for(let i = 0; i < arrayValue.length; i++){
    let index = arrayList.indexOf(arrayValue[i]);
    if(index > -1){
      arrayList.splice(index, 1);
    }
  }
  return arrayList;
}

console.log(remove(['a','b','c'], ['b', 'c']));