/**
 * @name 统计字符串中相同字符出现的次数
 * @description 统计字符串中相同字符出现的次数。使用Polyfill的方式实现。
 * @author Roger Shen
 * @version 0.2
 * @return {Object} 输出重复字符出现的次数
 */

if (!String.prototype.repeatCount) {
    String.prototype.repeatCount = function () {
        return this.split("").reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
    };
}
console.log("Hello,world".repeatCount());