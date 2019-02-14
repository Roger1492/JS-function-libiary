/**
 * 
 * @description 对象拆分成数组对
 * @author Roger Shen
 * @version 0.1.0
 * @param {Object} obj 
 * @return {Array}
 * 
 * @example
 * => console.log(pairs({a:"123",b:"456",c:"789",d:"101112",e:"131415",f:"161718"}))
 * => [['a','123'],['b','456'],['c','789'],['d','101112'],['e','131415'],['f','161718']]
 */
function pairs(obj) {
  let parent = [];
  for (let f in obj) {
    let nArr = [];
    nArr.push(f);
    nArr.push(obj[f]);
    parent.push(nArr);
  }
  return parent;
}