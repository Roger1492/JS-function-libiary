/**
 * @name 生成指定范围内的数字
 * @version 0.1.0
 * @author Roger Shen
 * @description 实现Python中的range功能
 * @param {Number} 起始范围
 * @param {Number} 结束范围
 * @param {Number} 间距
 * @return {Array} 数组
 * 
 * @example console.log(range(0,100,10));
 * [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 */

function range(start, end, step) {
    var arr = [];

    if (step === undefined || step === 1) {
        step = 1;
    }

    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;

}