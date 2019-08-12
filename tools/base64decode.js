/**
 * @description base64解码
 * @author Roger Shen
 * @version 0.1.1
 * @date 2019-8-9
 * 
 * @param {String} base64码
 * @return {Streing} 还原后的原码
 */

function base64decode(text) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let indexNum = [];                       // base64的索引
  let binArr = [];
  let bin8 = []
  let oct = [];
  let str = []
  let equal = /={1,2}/g.exec(text);  // 原始字符中的=数量
  let equalToA = text.replace(/=/g, 'A');  // 把=转换为A

  // 1，获取原始字符串的索引
  for (let i = 0; i < equalToA.length; i++) {
    indexNum.push(alphabet.search(equalToA[i]));
  }

  // 2，转换为二进制
  for (let i = 0; i < indexNum.length; i++) {
    binArr.push(indexNum[i].toString(2));
  }

  // 3, 二进制加前缀0
  for (let i = 0; i < binArr.length; i++) {
    binArr[i] = '0'.repeat((6 - binArr[i].length)) + binArr[i];
  }

  // 4, 把二进制合并起来，并去掉最后的=
  for (let i = 0; i < binArr.join('').length; i += 8) {
    bin8.push(binArr.join('').substring(i, i + 8));
  }

  // 5, 去掉最后无效的信息，即=
  if (equal !== null) {
    if (equal[0].length === 1) {
      bin8.length = bin8.length - 1;
    }
    if (equal[0].length === 2) {
      bin8.length = bin8.length - 2;
    }
  }

  // 6, 二进制转换为十进制
  for (let i = 0; i < bin8.length; i++) {
    oct.push(parseInt(bin8[i], 2));
  }

  // 7, 转换为ASCII
  for (let i = 0; i < oct.length; i++) {
    str.push(String.fromCharCode(oct[i]));
  }

  return str.join('');
}

console.log(base64decode('TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnJ1cHRpIG1vbGVzdGlhZSBpcHNhbSBpc3RlIGV4cGxpY2FibyBmYWNpbGlzISBBdCwgbWFnbmFtLiBRdWFlIGFsaXF1aWQgbm9zdHJ1bSBleGNlcHR1cmkgZXhwbGljYWJvIHF1aWEgbWluaW1hIGl0YXF1ZSwgaWQgb2ZmaWNpYSwgdm9sdXB0YXR1bSBtb2xsaXRpYSBpcHNhIGFwZXJpYW0u'))