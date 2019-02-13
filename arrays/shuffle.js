/**
 * 
 * @description 乱序
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array}
 * @return {Array}
 * 
 */

function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))