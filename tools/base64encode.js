/**
 * @description base64编码
 * @author Roger Shen
 * @version 0.1.1
 * @date 2019-8-9
 * 
 * @param {String} 原始字符串
 * @return {Streing} 编码后的结果
 */

function base64encode(text) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let IndexTable = alphabet.split('');
  let group = [];
  let index = [];
  let base64 = [];
  let suffix = '';

  // 1, 全部转换为ASCII
  let ascii = [];
  text.split('').forEach((item, ind, arr) => {
    let charCode = item.charCodeAt(0);
    ascii.push(charCode);
  })

  // 2, 转换为二进制(并在不满8位的前面补0)
  let binary = [];
  ascii.forEach((item, ind, arr) => {
    let t = '0'.repeat(8 - item.toString(2).length) + item.toString(2)
    binary.push(t);
  })

  // 3, 二进制后面补0(空2个原始字符，加2个八位，空一个原始字符，加1个八位)
  let len = 3 - text.length % 3;
  if (len === 0 || len === 3) {
    bin = binary.join('');
  } else if (len === 1) {
    bin = binary.join('') + '00000000';
  } else {
    bin = binary.join('') + '0000000000000000'
  }

  // 4, 每6位分一组
  for (let i = 0; i < bin.length; i += 6) {
    group.push(bin.slice(i, i + 6));
  }

  // 5, 空1个原始字符，去掉最后一个元素，空2个原始字符，去掉最后两个元素。
  if (len === 1) {
    group.length = group.length - 1;
  }
  if (len === 2) {
    group.length = group.length - 2;
  }

  // 6, 再转换位十进制作为base64的索引
  group.forEach((item, ind, arr) => {
    index.push(parseInt(item, 2))
  })

  // 7, 根据索引得到字符
  index.forEach((item, ind, arr) => {
    base64.push(IndexTable[item]);
  })

  // 8, 确定后面要加几个= (有1个字符（空2个），则加2个==，有2个字符（空1个），则加1个=)
  if (len === 0 || len === 3) {
    suffix = '';
  } else if (len === 1) {
    suffix = '=';
  } else {
    suffix = '==';
  }

  return base64.join('') + suffix;
}

console.log(base64encode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti molestiae ipsam iste explicabo facilis! At, magnam. Quae aliquid nostrum excepturi explicabo quia minima itaque, id officia, voluptatum mollitia ipsa aperiam.'))