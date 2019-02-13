/**
 * 
 * @description 删除数组中任意位置的元素,返回新数组
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array} arrayList 要删除的数组
 * @param {Array} arrayDelete 要删除的元素位置，数组形式
 * 
 * @example
 * => var a = ['a','b','c','d','e','f','g','h','i','j','k','l','t','y'];
 * => console.log(deleteArray(a, [1,9,6,12]));
 * => ['a','c','d','e','f','h','i','k','l','y']
 * 
 */
function deleteArray(arrayList, arrayDelete) {
  let arr = arrayDelete.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    let index = arrayList.indexOf(arrayList[arr[i]]);
    arrayList.splice(index, 1);
  }
  return arrayList;
}