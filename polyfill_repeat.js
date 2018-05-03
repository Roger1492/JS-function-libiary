/**
 * @description JS函数repeat的polyfill
 * @param {Number} 输入重复的次数
 * @return {String} 返回重复后的数据
 */

if (!String.prototype.repeats) {
    String.prototype.repeats = function (n) {
        'use strict'
        let count = Math.round(n);
        let str = '' + this;
        if (count <= 0) {
            throw new RangeError('repeat count can not be non-negative');
        }
        if (count == null) {
            throw new RangeError('can\'t convert' + this + 'to Object');
        }
        if (count > Infinity) {
            throw new RangeError('repeat count must less than infinity');
        }
        let rpt = '';
        for (let i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    }
}