/**
 * @desc 去除字符串中的空格
 * @param {String}
 * @param {Number} 去除字符串中的空格类型 1-前后空格 2-全部空格 3-前空格 4-后空格
 * @return {Number}
 * @version 0.1.0
 * @author Roger Shen
 * 
 */

// 普通函数实现
function trim(str, type = 1) {
   switch (type) {
      case 1: return str.replace(/(^\s*)|(\s*$)/g, '');;
      case 2: return str.replace(/\s/g, '');
      case 3: return str.replace(/^\s*/g, '');
      case 4: return str.replace(/\s*$/g, '');
      default: return 'please enter a number between 1 - 4';
   }
}