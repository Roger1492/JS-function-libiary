/**
 * 
 * @description 把数组分成指定个数的n组
 * @param {Array} array
 * @param {Number} group
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @example
 * => console.log(chunk(['test1', 'test2', 'test3', 'test4'], 3))
 * => [ [ 'test1', 'test2', 'test3' ], [ 'test4' ] ]
 * 
 * => console.log(chunk(['test1', 'test2', 'test3', 'test4'], 2))
 * => [ [ 'test1', 'test2' ], [ 'test3', 'test4' ] ]
 */

function chunk(array, group) {
  let newArr = [];
  let index = 0;
  let split = Math.ceil(array.length / group);

  for (let i = 0; i < split; i++) {
    newArr.push([]);
    for (let j = 0; j < group; j++) {
      newArr[i].push(array[index++]);
      newArr[i][j] === undefined ? newArr[i].pop() : ''; // 如果分组中有undefined，则删除它
    }
  }
  return newArr;
};