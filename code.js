(function () {
    // var root = this;
    var root = (typeof self == 'object' && self.self == self && self) ||
               (typeof global == 'object' && global.global == global && global) ||
               this ||
               {};
    var _ = {};
    root._ = _;

    /////////////////////////////
    ///////// Array 方法 ////////
    ////////////////////////////


    _.version = "0.1.0";

    /**
     * 
     * 把数组转化为带分隔符的字符串
     * 
     * @since 0.1.0
     * @param {Array} array 
     * @param {*} separator 分隔符
     * @author Roger Shen
     * 
     * @example 
     * _.join(["a","B","c","D","e","F"])
     * // => "a,B,c,D,e,F"
     * 
     * _.join([1,2,3,4,5],"*")
     * // => "1*2*3*4*5"
     * 
     */
    _.join = function (array, separator){
        let str = '';
        if(separator == null){
            str = array.toString();
        } else {
            for(let i = 0; i < array.length; i++){
                str += array[i] + separator;
            }
            str = str.slice(0, str.length - separator.length);
        }
        return str;
    };

    ////////////////////////////////
    //////////  Lang    ////////////
    ////////////////////////////////

    _.type = function (t) {
        let tp = Object.prototype.toString.call(t);

        switch(tp){
            case "[object Number]" : return "number" ; break;
            case "[object Boolean]" : return "boolean" ; break;
            case "[object String]" : return "string" ; break;
            case "[object Undefined]" : return "underfined" ; break;
            case "[object Null]" : return "null" ; break;
            case "[object Date]" : return "date" ; break;
            case "[object Error]" : return "error" ; break;
            case "[object RegExp]" : return "regExp" ; break;
            case "[object Function]" : return "function" ; break;
            case "[object Object]" : return "object" ; break;
            case "[object Array]" : return "array" ; break;
            case "[object Math]" : return "math" ; break;
            case "[object JSON]" : return "json" ; break;
            case "[object Set]" : return "set" ; break;
            case "[object Map]" : return "map" ; break;
            case "[object WeakSet]" : return "weakSet" ; break;
            case "[object WeakMap]" : return "weakMap" ; break;
            default: return "Wrong type";
        }
    };


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