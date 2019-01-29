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
     * 把多个数组列表中共同拥有的元素筛选出来组成一个新数组
     * 
     * @since 0.1.0
     * @param {*Array} array 
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    // TODO: 
    _.intersection = function (...array) { }

    /**
     * 
     * 返回除了最后一个元素的新数组，n是要排除的最后n个元素
     * 
     * @since 0.1.0
     * @param {Array} arrayList 原始数组
     * @param {Number} n 长度
     * @returns {Array}
     * @author Roger Shen
     */
    _.initial = function (arrayList, n=1) {
        return arrayList.slice(0, arrayList.length-n);
    };


    /**
     * 
     * 从数组中随机选出n个元素组成一个新的数组。如果n=1，则随机返回一个元素
     * 
     * @since 0.1.0
     * @param {Array} arrayList 原始数组
     * @param {Number} n n个随机数
     * @returns {Array}
     * @author Roger Shen
     * 
     * @example 
     * 
     * _.sample([1,2,3,4,5,6,7,8],4)
     * // => [3, 1, 6, 5]
     * _.sample([1,2,3,4,5,6,7,8],2)
     * // => [5, 3]
     * _.sample([1,2,3,4,5,6,7,8],6)
     * // => [4, 5, 2, 1, 6, 7]
     * 
     */
    _.sample = function (arrayList, n=1) {
        let newArr = [];
        for(let i = 0; i < n; i++){
            let r = Math.floor(Math.random()*arrayList.length);
            newArr.push(arrayList[r]);
            _.remove(arrayList,arrayList[r]);
        }
        return newArr;
    };

    /**
     * 
     * 返回删除指定元素后的新数组
     * 
     * @since 0.1.1
     * @param {arrayList} arrayList
     * @param {*arg} 要删除的元素
     * @author Roger Shen
     * 
     */
    _.without = function (arrayList,...arg) {
        for(let i = 0; i < arg.length; i++){
            _.remove(arrayList, arg[i]);
        }
        return arrayList;
    };

    /**
     * 
     * 返回两个数组中不同的元素，并合并为一个新数组
     * 
     * @since 0.1.0
     * @param {Array1} array1 第一个数组
     * @param {Array2} array2 第二个数组
     * @returns {Array}
     * @author Roger Shen
     */
    _.xor = function (array1, array2) {
        let newArr = [];
        array1.forEach((ele1,ind1,arr1) => {
            if(!array2.includes(ele1)){
                newArr.push(ele1);
            }
            return newArr;
        })

        array2.forEach((ele2,ind2,arr2) => {
            if(!array1.includes(ele2)){
                newArr.push(ele2);
            }
            return newArr;
        })

        return newArr;
    };

    /**
     * 
     * 返回数组索引为index的元素，如果是负数，则返回倒数的索引。
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @param {Number} index 要返回的索引
     * @returns {*} 指定索引位置的元素
     * @author Roger Shen
     * 
     */
    _.nth = function (array, index) {
        if(index >= 0){
            return array[index];
        } else {
            return array[array.length - Math.abs(index)]
        }
    };


    /**
     * 
     * 把元素全部添加到数组的后面
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @param {*} arg 要添加的元素
     * @returns {Array} 新数组
     * @author Roger Shen
     */
    _.pushAll = function (array, ...arg) {
        arg.forEach((ele,ind,arr) => {
            array.push(ele);
        })
        return array;
    };


    /**
     * 
     * 删除数组中所有给定的值
     * 
     * @since 0.1.0
     * @param {Array} arrayList 原始数组
     * @param  {...any} value 要删除的数组中的内容
     * @author Roger Shen
     * 
     * @example 
     * 
     * _.pull(["one","two","three","one","two","three","one"], "one")
     * // => ["two", "three", "two", "three"]
     * 
     */
    _.pull = function (arrayList, ...value) {
        for(let i = 0; i < value.length; i++){
            for(let j = 0; j < arrayList.length; j++){
                if(_.contains(arrayList,value[i])){
                    _.remove(arrayList, value[i])
                }
            }
        }
        return arrayList;
    };


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

    /**
     * @since 0.1.0
     * @param  {...any} arr 数组列表
     * @returns {...Array}
     * @author Roger Shen
     * 
     * @example 
     * 
     * _.zip(["Roger","Lewis", "Jim"],[22,28,32],[8000,9000,7000])
     * // => [ [ 'Roger', 22, 8000 ],[ 'Lewis', 28, 9000 ],[ 'Jim', 32, 7000 ] ]
     * 
     */
    _.zip = function (...arr) {
        let newArr = [];
        let argLen = arguments[0].length;
        for(let i = 0; i < argLen; i++){
            let nr = [];
            newArr.push(nr);
            for(j = 0; j < arr.length; j++){
                nr.push(arr[j][i]);
            }
        }
        return newArr;
    };

    /**
     * 
     * 把数组分成指定个数的组
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @param {Number} group 每个小组的元素个数
     * @author Roger Shen
     * 
     * @example
     * 
     * _.chunk(['test1','test2','test3','test4'], 2)
     * // => [ [ 'test1', 'test2' ], [ 'test3', 'test4' ], [ 'test5' ] ]
     * _.chunk(['test1','test2','test3','test4'], 3)
     * // => [ [ 'test1', 'test2', 'test3' ], [ 'test4', 'test5' ] ]
     * _.chunk(['test1','test2','test3','test4'], 3)
     * // => [ [ 'test1', 'test2', 'test3', 'test4' ], [ 'test5' ] ]
     */
    _.chunk = function (array, group) {
        let newArr = [];
        let index = 0;
        let split = Math.ceil(array.length / group);
        
        for(let i = 0; i < split; i++){
            newArr.push([]);
            for(let j = 0; j < group; j++){
                newArr[i].push(array[index++]);
                newArr[i][j]=== undefined ? newArr[i].pop() : '';       // 如果分组中有undefined，则删除它
            }
        }
        return newArr;
    };

    ////////////////////////////////
    //////////  Lang    ////////////
    ////////////////////////////////

    /**
     * 
     * 二进制取反
     * 
     * @since 0.1.0
     * @param {Number} num 
     * @returns {Number}
     * @author Roger Shen
     * 
     */
    _.negation = function (num) {
        let f = '';
        for(let i = 0; i < num.length; i++){
            if(num[i] == "1"){
                f += num[i].replace("1","0")
            } else {
                f += num[i].replace("0","1");
            }
        }
        return f;
    }

    /**
     * 返回一个当前时间的整数时间戳
     * @since 0.1.0
     * @returns {Number}
     * @author Roger Shen
     * 
     */
    _.now = function () {
        return new Date().getTime();
    };


    /**
     * 
     * 把对象转化为 `[key, value]`对
     * 
     * @since 0.1.0
     * @param {Object} obj 
     * @returns {Array}
     * @author Roger Shen
     * 
     * @example
     * 
     * _.pairs({a:"123",b:"456",c:"789",d:"101112",e:"131415",f:"161718"})
     * // => [ [ 'a', '123' ],[ 'b', '456' ],[ 'c', '789' ],[ 'd', '101112' ],[ 'e', '131415' ],[ 'f', '161718' ] ]
     * 
     */
    _.pairs = function (obj) {
        let newArr = [];
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        for(let i = 0; i < keys.length; i++){
            let nr = [];
            nr.push(keys[i]);
            nr.push(values[i]);
            newArr.push(nr);
        }
        return newArr;
    }

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