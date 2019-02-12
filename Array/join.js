/**
 * 
 * @description 把数组转化为带分隔符的字符串
 * @author Roger Shen
 * @version 0.1.0
 * @param {Array} arrayList 数组
 * @param {String} separator 分隔符
 * @return {String}
 * 
 * @example
 * => console.log(join([1,2,3,4,5,6,7], '-'))
 * => // 1-2-3-4-5-6-7
 */
function join(arrayList, separator){
  let str = '';
  if(separator === null){
    str = arrayList.toString();
  } else {
    for(let i = 0; i < arrayList.length; i++){
      str += arrayList[i] + separator;
    }
    str = str.slice(0, str.length - separator.length);
  }
  return str;
}