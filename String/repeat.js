/**
 * @name 生成指定数量的字符串
 * @description 返回生成指定数量的字符串
 * @author Roger Shen
 * @version 0.1
 * @param {String} 要重复的字符串
 * @param {Number} 重复的次数
 * @return {String}
 */

function repeat(str, repeatNum){

    // 如果repeatNum是正负无穷大或者是小于0，返回错误提示
    if(repeatNum === Infinity || repeatNum === -Infinity || repeatNum < 0){
        return "RangeError: repeat Number must be positive and less than inifinity"
    }

    repeatNum = Math.floor(repeatNum);
    var s = "";
    for(let i = 0; i < repeatNum; i++){
        s += str;
    }
    return s;
    
}