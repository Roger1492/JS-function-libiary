/**
 * 
 * @description 字符串分组
 * @author Roger Shen
 * @since 0.1.0
 * @param {String}  要分的字符串
 * @param {number}  要分的组数
 * @param {String}  分隔符
 * @return {String}  
 * 
 * @example
 * 
 * => console.log(group('qwertyuioplkjhgfdsazxcvbnm', 4, '-'))
 * => qwer-tyui-oplk-jhgf-dsaz-xcvb-nm
 * 
 * => console.log(group('qwertyuioplkjhgfdsazxcvbnm', 6, ','))
 * => qwerty,uioplk,jhgfds,azxcvb,nm
 */

function group(str, num, separator){
  let arr = [];
  let s = '';
  for(let i = 0; i < str.length; i+=num){
    arr.push(str.substring(i,i+num));
  }
  for(let i = 0; i < arr.length; i++){
    s += arr[i] + separator;
  }
  return s.substr(0, s.length-1);
}

console.log(group('qwertyuioplkjhgfdsazxcvbnmht', 4, ','))