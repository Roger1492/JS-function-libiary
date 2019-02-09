/**
 * 
 * @description 从数组中随机选出n个元素组成一个新的数组
 * @version 0.1.1
 * @author Roger Shen
 * @param {Array} arrayList 
 * @param {Number} n 
 * 
 * @example
 * => var a = ['a','b','c','d','e','f','g','h','j','k','l','t','y'];
 * => console.log(sample(a, 1));
 * => [ 'b', 'y', 't', 'a', 'c' ]
 * 
 */
function sample(arrayList, n = 1) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * arrayList.length);
    newArr.push(arrayList[r]);
    let index = arrayList.indexOf(arrayList[r]);
    if (index > -1) {
      arrayList.splice(index, 1);
    }
  }
  return newArr;
}