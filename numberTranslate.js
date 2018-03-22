/**
 * @description 各种进制之间的相互转换
 * 十进制转换为其他进制直接使用String.toString(2)方法即可。二进制转换为其他进制，先把二进制转换为十进制，再用十进制转换为其他进制。
 */

 //十进制转换为二进制，八进制，十六进制
function translation10to(num){
    let to2 = num.toString(2);
    let to8 = num.toString(8);
    let to16 = num.toString(16);
    return "原十进制数是："+num+"\n转换为二进制："+to2+"\n转换为八进制："+to8+"\n转换为十六进制："+to16;
}

// 二进制转换为八进制，十进制，十六进制
function translation2to(num){
    let n10 = parseInt(num, 2);  // 十进制
    let to8 = n10.toString(8);
    let to16 = n10.toString(16);
    return "原二进制数是："+num+"\n转换为八进制："+to8+"\n转换为十进制："+n10+"\n转换为十六进制："+to16;
}
console.log(translation2to(101010101))
