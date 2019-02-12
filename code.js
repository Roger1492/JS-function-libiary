(function () {
    // var root = this;
    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global) ||
        this || {};
    var _ = {};
    root._ = _;

    _.version = "0.1.0";

    _.isArray = function (array) {
        return Object.prototype.toString.call(array) === "[object Array]";
    };

    _.isObject = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    };

    _.isFunction = function (f) {
        return Object.prototype.toString.call(func) === "[object Function]";
    };

    _.isNumber = function (num) {
        return Object.prototype.toString.call(num) === "[object Number]";
    };

    _.isBoolean = function (bool) {
        return Object.prototype.toString.call(bool) === "[object Boolean]";
    };

    _.isString = function (str) {
        return Object.prototype.toString.call(str) === "[object String]";
    };

    _.isNaN = function (nan) {};

    _.isNull = function (nil) {
        return Object.prototype.toString.call(nil) === "[object Null]";
    };

    _.isUndefined = function (udf) {
        return Object.prototype.toString.call(udf) === "[object Undefined]";
    }

    _.isSet = function (set) {
        return Object.prototype.toString.call(set) === "[object Set]";
    };

    _.isMap = function (map) {
        return Object.prototype.toString.call(map) === "[object Map]"
    };

    _.isDate = function (date) {
        return Object.prototype.toString.call(date) === "[object Date]";
    };

    _.isRegExp = function (re) {
        return Object.prototype.toString.call(re) === "[object RegExp]";
    }

    _.isWeakMap = function (weakMap) {
        return Object.prototype.toString.call(weakMap) === "[object WeakMap]";
    };

    _.isWeakSet = function (weakSet) {
        return Object.prototype.toString.call(weakSet) === "[object WeakSet]";
    };

})()