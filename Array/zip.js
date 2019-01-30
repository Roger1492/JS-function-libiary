/**
 * 
 * @description 数组的对应项组成新的数组
 * @param  {...Array} arr
 * @author Roger Shen
 * @version 0.1.0
 * 
 * @example
 * => console.log(zip(["Roger","Lewis", "Jim"],[22,28,32],[8000,9000,7000]));
 * => [['Roger',22,8000],['Lewis',28,9000],['Jim',32,7000]]
 */
function zip(...arr) {
  let newArr = [];
  let argLen = arguments[0].length;
  for(let i = 0; i < argLen; i++){
      let nr = [];
      newArr.push(nr);
      for(j = 0; j < arr.length; j++){
          nr.push(arr[j][i]);
      }
  }
  return newArr;
};