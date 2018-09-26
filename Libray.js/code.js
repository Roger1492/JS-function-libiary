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
     * 判断一个数组中是否包含一个指定的值
     * 
     * @since 0.1.0
     * @param {Array} arrayList 数组列表
     * @param {*} searchElement 要查找的元素
     * @param {*} fromIndex 从该索引处开始找
     * @returns {Boolean} 如果存在返回true，不存在返回false
     * @author Roger Shen
     * 
     */
    _.exist = _.has = function (arrayList, searchElement, fromIndex=0) {
        let nArr = arrayList.slice(fromIndex, arrayList.length);
        if(nArr.indexOf(searchElement) !== -1){
            return true;
        } else {
            return false;
        }
    };


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
     * 返回数组的索引
     * 
     * @since 0.1.0
     * @param {Array} arrayList 
     * @param {*} value 
     * @returns {Number}
     * @author Roger Shen
     */
    _.indexOf = function (arrayList, value){
        let index;
        arrayList.forEach((ele,ind,arr) => {
            if(ele == value){
                index = ind;
            }
        })
        return index;
    }


    /**
     * 
     * 从array数组返回other数组中没有的值
     * 
     * @since 0.1.0
     * @param {Array} array
     * @param {Array} other
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.difference = function (array, other) {
        let newArr = [];
        
        array.forEach((ele, ind, arr) => {
            if(!other.includes(ele)){
                newArr.push(ele);
            }
        })
        return newArr;
    };


    /**
     * 
     * 返回打乱顺序后的新数组
     * 
     * @since 0.1.0
     * @param {*} array
     * @returns {*} array
     * @author Roger Shen
     * 
     */
    _.shuffle = function (array) {
        for(let i = 0; i < array.length*10; i++){
            let rd1 = Math.floor(Math.random() * array.length);
            let rd2 = array.length-rd1-1;
            _.replaceIndex(array, rd1, rd2);
        }
        return array;
    };


    /**
     * 
     * 返回数组中去除重复值后的新数组
     * 
     * @since 0.1.0
     * @param {Array} array
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.uniq = function (array) {
        return Array.from(new Set(array));
    };


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
     * 删除数组中指定元素
     * 
     * @since 0.1.1
     * @param {Array} arrayList 原始数组
     * @param {*} rm 要删除的数组元素
     * @author Roger Shen
     * 
     */
    _.remove = function (arrayList, val) {
        for(let i = 0; i < arrayList.length; i++){
            let index = arrayList.indexOf(val);
            if(index > -1){
                arrayList.splice(index, 1);
            }
        }
        return arrayList;
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
     * 查找值是否存在于数组中
     * 
     * @since 0.1.0
     * @param {Array} arrayList 数组
     * @param {*} value 要查找的值
     * @param {Number} fromIndex 起始位置
     * @returns {Boolean}
     * @author Roger Shen
     * 
     * @example 
     * 
     * _.contains([1,2,3,4,5,6,7,8,9],3)
     * // => true
     * _.contains([1,2,3,4,5,6,7,8,9],3,0)
     * // => true
     * _.contains([1,2,3,4,5,6,7,8,9],3,3)
     * // => false
     * _.contains([1,2,3,4,5,6,7,8,9],3,6)
     * // => false
     * 
     */
    _.contains = function (arrayList, value, fromIndex) {
        let newArr = (fromIndex==0 || fromIndex == null) ? arrayList : arrayList.slice(fromIndex, arrayList.length);
        return newArr.includes(value) ? true : false;
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
     * 反转数组中的元素，第一个元素变为最后一个。
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @returns {Array} array 新数组
     * @author Roger Shen
     */
    _.reverse = function (array) {
        let newArr = [];
        for(let i = array.length-1; i >= 0; i--){
            newArr.push(array[i]);
        }
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
     * 
     * 返回集合的长度或者是可迭代字符串的长度
     * 
     * @since 0.1.0
     * @param {*} 
     * @returns {Number}
     * @author Roger Shen
     * 
     * @example
     * _.size("Hello,world")
     * // => 11
     * _.size(["one","two","three","four"])
     * // => 4
     * _.size({a:"one",b:"two",c:"three"})
     * // => 3
     * 
     */
    _.size = function (n) {
        // 两种实现都可以
        return Array.from(Object.keys(n)).length;
        // return Object.keys(n).length;
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
     * 删除数组前面指定个数的元素
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @param {Array} n 要删除的长度
     * @returns {Array} 返回新数组
     * @author Roger Shen
     * 
     * @example 
     * _.drop([1,2,3,4,5,6,7,8] ,0)
     * // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
     *
     * _.drop([1,2,3,4,5,6,7,8], 1)
     * // => [ 2, 3, 4, 5, 6, 7, 8 ]
     * 
     * _.drop([1,2,3,4,5,6,7,8], 4)
     * // => [ 5, 6, 7, 8 ]
     * 
     * _.drop([1,2,3,4,5,6,7,8], 10)
     * // => []
     */
    _.drop = function (array, n=1) {
        return array.slice(n);
    };


    /**
     * 
     * 删除数组后面指定个数的元素
     * 
     * @since 0.1.0
     * @param {*} array 原始数组
     * @param {*} n 要删除的长度
     * @returns {Array} 返回新数组
     * @author Roger Shen
     * 
     * @example
     * 
     * _.dropRight([1,2,3,4,5,6,7,8], 2)
     * [ 1, 2, 3, 4, 5, 6 ]
     * 
     * _.dropRight([1,2,3,4,5,6,7,8], 10)
     * [ 1, 2, 3, 4, 5, 6 ]
     * 
     * _.dropRight([1,2,3,4,5,6,7,8], 0)
     * [ 1, 2, 3, 4, 5, 6, 7, 8 ]
     */
    _.dropRight = function (array, n=1) {
        const len = array == null ? 0 : array.length;
        return array.slice(0,len-n);
    };


    /**
     * 
     * 删除所有数组元素为falsy - (false,NaN,'',0,undefined) 的值。
     * 
     * @since 0.1.0
     * @param {Array} array 原始数组
     * @returns {Array} array 删除所有无效元素的新数组
     * @author Roger Shen
     * 
     * @example 
     * _.compact([4,'tes',null, undefined,'of', '', NaN])
     * // => [ 4, 'tes', 'of' ]
     * 
     */
    _.compact = function (array) {
        let newArr = [];

        array.forEach((ele, ind, arr) => {
            if(Boolean(ele) == true){
                newArr.push(ele);
            }
        })

        return newArr;
    };


    /**
     * 
     *  统计数组中相同元素出现的次数
     * 
     * @version 0.1.0
     * @return {Array} 输出重复字符出现的次数
     * @returns {}
     * @author Roger Shen
     * 
     * @example
     * 
     * _.repeatCount(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'])
     * // => {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
     * 
     */
    _.repeatCount = function (array) {
        return array.reduce((allNames, name) => {
            if(name in allNames){
                allNames[name]++;
            } else {
                allNames[name] = 1;
            }
            return allNames;
        }, {})
    };


    /**
     * 
     * 把字符串重复指定的次数
     * 
     * @since 0.1.0
     * @param {String} context 要重复的String
     * @param {*} n 要重复的次数
     * @returns {String}
     * @author Roger Shen
     * 
     */
    _.repeat = function (context, n=1) {
        let str = '';
        for(let i = 0; i < n; i++){
            str += context;
        }
        return str;
    }

    
    /**
     * 
     * 二维数组的一维化(扁平化))
     * 
     * @since 0.1.0
     * @param {Array} array 
     * @returns {Array}
     * @author Roger Shen
     * 
     * @example 
     * _.flat([["a","b"],[1,2],["n","y"],[5,"h"]])
     * // => (8) ["a", "b", 1, 2, "n", "y", 5, "h"]
     */
    _.flatten = function (array) {
        // 这个方法只能复制一层
        // return array.reduce((a, b) => a.concat(b));

        while (array.some(item => Array.isArray(item))) {
            array = [].concat(...array);
        }
    
        return array;
    };

    /**
     * 
     * 返回数组中的第一个元素
     * 
     * @since 0.1.0
     * @param {Array} array
     * @returns {*} 返回数组中的第一个元素
     * @author Roger Shen
     * 
     * @example
     * 
     * _.first(['Jim','Roger','Lewis','Jimmy','John','Jack']);
     * // => 'Jim'
     * 
     */

    _.first = _.head = function (array) {
        return (array != null && array.length) ? array[0] : undefined;
    };


    /**
     * 
     * 返回数组中的最后一个元素
     * 
     * @since 0.1.0
     * @param {Array} array
     * @returns {*} 返回数组中的最后一个元素
     * @author Roger Shen
     * 
     * @example
     * 
     * _.last(['Jim','Roger','Lewis','Jimmy','John','Jack']);
     * // => 'Jack'
     * 
     */
    _.last = _.tail = function (array) {
        return (array !== null && array.length) ? array[array.length - 1] : undefined;
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


    /**
     * 数组去重
     * 
     * @since 0.1.0
     * @param {*}
     * @returns {*}
     * @author Roger Shen
     */
    _.deleteRepeats = function (array) {

        // 第一种去重方法：用Set的唯一性来去重
        return Array.from(new Set(array));

        // 第二种去重方法：兼容性最好的，也是最传统的方法
        // let res = [];
        // for(var i = 0; i < array.length; i++){
        //     for(var j = 0; j < res.length; j++){
        //         if(array[i] === res[j]){
        //             break;
        //         }
        //     }
        //     if(j === res.length){
        //         res.push(array[i]);
        //     }
        // }
        // return res;

        // 第三种去重方法：indexOf查看元素是否存在
        // let res = [];
        // for(let i = 0; i < array.length; i++){
        //     if(res.indexOf(array[i]) === -1){
        //         res.push(array[i])
        //     }
        // }
        // return res;
    };


    /**
     * 
     * 在数组随机选择一个元素
     * 
     * @since 0.1.0
     * @author Roger Shen
     * @param {Array} Array 参数是数组
     * @returns {*} 返回数组中的一个随机元素
     * 
     * @example
     * _.choice(['first','second','third','fouth','fifth','sixth','seventh','eighth'])
     * // => 'sixth'
     * 
     */
    _.choice = function (array) {
        let len = array.length;
        let rnd = Math.floor(Math.random() * len);
        return array[rnd];
    };


    /**
     * 
     * 生成指定范围内的数字
     * 
     * @description 默认输出 => (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     * 
     * @since 0.1.0
     * @param {Number} start 起始数字
     * @param {Number} stop 结束数字
     * @param {Number} step 跨度
     * @returns {Array} 返回数组
     * @author Roger Shen
     * 
     * @example 
     * _.range(1,20,2)
     * // => (10) [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
     * 
     */
    _.range = function (start = 0, stop = 10, step = 1) {

        let arr = [];

        if (step === undefined || step === 1) {
            step = 1;
        }

        for (let i = start; i < stop; i += step) {
            arr.push(i);
        }

        return arr;
    };


    //////////////////////////////
    //////// Random 方法 /////////
    //////////////////////////////


    /**
     * @since 0.1.0
     * @param {Number} 以什么类型输出 - hex，rgba, hsla
     * @returns {String} the value of the color with hex;
     * @author Roger Shen
     * 
     * @example 
     * _.randomColor('hex')
     * // => #dc8ccb
     * 
     * _.randomColor('rgba')
     * // => rgba(58, 60, 185, 0.4)
     * 
     * _.randomColor('hsla')
     * // => hsla(134,9%,13%,0.2)
     * 
     */
    _.randomColor = function(type){
        if (type == 'hex'){
            return "#" + Math.floor(Math.random()* (1 << 24)).toString(16);
        } else if (type == 'rgba'){
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            let a = Math.floor(Math.random()*10)/10;
            return 'rgba('+r+','+g+','+b+','+a+')';
        } else if (type == 'hsla'){
            let h = Math.floor(Math.random()*360);
            let s = Math.floor(Math.random()*100) + "%";
            let l = Math.floor(Math.random()*100) + "%";
            let a = Math.floor(Math.random()*10)/10;
            return 'hsla('+h+','+s+','+l+','+a+')';
        } else {
            return "Sorry, please enter rightful type";
        }
    };


    /**
     * 
     * 随机批量生成指定数量的 IP address
     * 
     * @since 0.1.0
     * @param {Number} n 要随机生成的IP个数
     * @returns {String} 随机IP地址
     * @author Roger Shen 
     */
    _.randomIP = function (n=1) {
        let R = '',
            r,
            r1,
            r2,
            r3,
            r4;
        for(let i = 0; i < n; i++){
            r1 = Math.floor(Math.random() * 256);
            r2 = Math.floor(Math.random() * 256);
            r3 = Math.floor(Math.random() * 256);
            r4 = Math.floor(Math.random() * 256);
            r = r1 + ':' + r2 + ':' + r3 + ':' + r4;
            R += r + '\n';
        }
        return R;
    };


    /**
     * 
     * 返回指定区间内的随机数
     * 
     * @since 0.2
     * @param {Number} min 区间最小值
     * @param {Number} max 区间最大值
     * @returns {Number}
     * @author Roger Shen
     * 
     * @description
     * 
     * "front" 前开区间 —— 包含前数，不包含后数
     * "back" 后开区间 —— 不包含前数，包含后数
     * "all" 前后都开区间 —— 前后数都包含
     * "none" 前后都闭区间 —— 前后数都不包含
     * 
     */
    _.random = function (min, max=0, predicate) {
        if(predicate === "front"){
            return Math.floor(Math.random() * min + (max - min));
        } else if(predicate === "back"){
            return Math.floor(Math.random() * min + (max - min + 1));
        } else if(predicate === "all"){
            return Math.floor(Math.random() * (min + 1) + (max - min));
        } else if(predicate === "none"){
            return Math.floor(Math.random() * (min -1 ) + (max - min + 1));
        }
    }


    ///////////////////////////////
    ////////   Math 方法  /////////
    //////////////////////////////
    

    /**
     * 
     * 加减乘除 四则运算
     * 
     * @param {*} augend 
     * @param {*} addend 
     */
    _.add = function (augend, addend) {
        return augend + addend;
    };

    _.subtract = function (minuend, subtrahend) {
        return minuend - subtrahend;
    };

    _.multiply = function(multiplier, multiplicand) {
        return multiplier * multiplicand;
    };

    _.divide = function (devidend, divisor) {
        return devidend / divisor;
    };


    /**
     * 
     * 返回数组中最小的数字
     * 
     * @description 与返回最大值的原理是一样的
     * 
     * @since 0.1.0
     * @param {Array} array 
     * @returns {Number}
     * @author Roger Shen
     */
    _.min = _.smallest = function (array) {
        return array.sort((a, b) => (a - b))[0];
    };


    /**
     * 
     * 返回数组中最大的数字
     * 
     * @since 0.1.1
     * @param {Array} array 
     * @returns {Number}  
     * @author Roger Shen
     * 
     */
    _.max = _.biggest = function (array) {
        // 先把所有的非数字转化为数字
        let newArr = [];
        for(let i = 0; i < array.length; i++){
            newArr.push(parseInt(array[i]));
        }

        // 第一种方法： 用数组的sort方法倒序排序后选第一个元素
        // return newArr.sort((a, b) => (b - a))[0];

        // 第二种方法： 最原始的方法
        // var result = newArr[0];
        // for(let i = 0; i < newArr.length; i++){
        //     result = Math.max(result, newArr[i])
        // }
        // return result;

        // 第三种方法： 用reduce方法
        // return newArr.reduce((a, b) => Math.max(a, b));

        // 第四种方法： apply方法
        return Math.max.apply(null, newArr);

        // 第五种方法： ES6方法
        // return Math.max(...newArr);
    };


    /**
     * 
     * 阶乘
     * 
     * @since   0.1.0
     * @param {Number} num 
     * @returns {Number}
     * @author Roger Shen
     * 
     * @example
     * 
     * _.factorial(6);
     * // => 720
     */
    _.factorial = function (num) {
        return (num === 0 || num === 1) ? 1 : num * arguments.callee(num - 1);
    };


    /**
     * 
     * 给定长度，生成斐波那契数列
     * 
     * @since 0.1.0
     * @param {Number} len 要生成的斐波那契数列的长度
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.fibonacci = function (len) {
        let a = 0,
            b = 1,
            arr = [0, 1];
        while(arr.length < len){
            [a, b] = [b, a+b];
            arr.push(b);
        }
        return arr;
    };


    /**
    * 
    * 返回数组所有元素之和
    * 
    * @description
    * 判断每一个数组元素的类型，把所有非数字类型全部转化为数字类型，并全部保存到一个新的数组中。
    * 如果是空值或非有效值，则删除这个元素。
    * 
    * @since 0.1.0
    * @param {*} array
    * @returns {Number} 返回数组中的所有数字之和
    * @author Roger Shen
    * 
    * @example
    * _.sum(['54','4g','34ge','9fj3'])
    * // => 101
    * 
    */
   _.sum = function (array) {
    let newArr = [];
    array.forEach((element, index, arr) => {
        let newE = parseInt(element);
        newE / newE === 1 ? newArr.push(newE) : '';       // 如果是有效数字，则加入到新数组中。
    })
        return newArr.reduce((a, b) => a + b);
    };


    /**
     * 
     * 返回数组所有元素之积
     * 
     * @description 实现的原理和上面的 sum 方法相同。
     * 
     * @since 0.1.0
     * @param {*} array 
     * @returns {Number} 返回数组中所有元素之乘积
     * @author Roger Shen
     */
    _.product = function (array) {
        let newArr = [];
        array.forEach((ele, ind, arr) => {
            let newE = parseInt(ele);
            newE / newE === 1 ? newArr.push(newE) : '';
        })
        return newArr.reduce((a, b) => a * b);
    };


    ////////////////////////////////
    //////////  Lang    ////////////
    ////////////////////////////////

    

    /**
     * 
     * 判断属性是否为原型属性
     * 
     * @description 如果 name 是 obj 的原型属性，则返回 true，否则返回 false。
     * 
     * @since 0.1.1
     * @param {Object} obj 实例对象
     * @param {property}} name 实例对象的属性
     * @author Roger Shen
     */
    _.hasPrototypeProperty = function(obj, name){
        return !obj.hasOwnProperty(name) && (name in obj);
    }


    _.shadowCopy = function (obj) {
        if(typeof obj !== "object") return;

        let newOA = obj instanceof Array ? [] : {};
        
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                newOA[key] = obj[key];
            }
        }
        return newOA;
    }


    /**
     * 
     * 实现对象的深拷贝
     * 
     * @since 0.1.0
     * @param {Object} obj 
     * @returns {Object}
     * @author Roger Shen
     * 
     */
    _.deepCopy = function (obj) {
        if (typeof obj !== "object") return;

        let newObj = obj instanceof Array ? [] : {};

        for(var key in obj){
            if(obj.hasOwnProperty(key)) {
                newObj[key] = typeof obj[key] === "object" ? this.deepCopy(obj[key]) : obj[key];
            }
        }

        return newObj;
    };


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
     * 
     * 各项数相加
     * 
     * @since 0.1.0
     * @param {Number} num 
     * @returns {Number}
     * @author Roger Shen
     * 
     * @example 
     * _.addDigits(789)
     * // => 7+8+9=24  => 2+4=6
     * 
     */
    _.addDigits = function (num) {
        let arr = [];
        let sNum = String(num);
        for(let i = 0; i< sNum.length; i++){
            arr.push(Number.parseInt(sNum[i]));
        }
        if(arr.length > 1){
            return _.addDigits(arr.reduce((a,b) => a+b));
        } else {
            return arr[0];
        }
    };


    /**
     * 
     * 删除String的所有空白字符
     * 
     * @since 0.1.0
     * @param {String} string 
     * @returns {String}
     * @author Roger Shen
     * 
     */
    _.trimAll = function (string) {
        return string.replace(/\s/g, '');
    };


    /**
     * 
     * 删除String两边的空白字符
     * 
     * @since 0.1.0
     * @param {String} string 
     * @returns {String}
     * @author Roger Shen
     * 
     */
    _.trim = function (string) {
        return string.replace(/(^\s*)|(\s*$)/g, '');
    };


    /**
     * 
     * 以数组的形式返回对象的keys
     * 
     * @since 0.1.0
     * @param {Object} obj 对象
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.keys = function (obj) {
        // return Object.keys(obj);
        var arr = [];
        for(let s in obj){
            arr.push(s);
        }
        return arr;
    };


    /**
     * 
     * 以数组的形式返回对象的values
     * 
     * @since 0.1.0
     * @param {Object} obj 对象
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.values = function (obj) {
        // return Object.values(obj);
        let arr = [];
        for(let s in obj){
            arr.push(obj[s]);
        }
        return arr;
    };


    /**
     * 
     * 互换前后两个值
     * 
     * @since 0.1.0
     * @param {*} value1 第一个值
     * @param {*} value2 第二个值
     * @returns {*}
     * @author Roger Shen
     * 
     */
    _.exchange = function (value1, value2) {
        return [value1,value2] = [value2,value1];
    }


    /**
     * 
     * 直接通过值交换数组中的两个值
     * 
     * @since 0.1.0
     * @param {Array} arrayList 原始数组
     * @param {*} v1 要交换的值 v1
     * @param {*} v2 要交换的值 v2
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.replaceValue = function (arrayList, v1, v2) {
        let index1 = arrayList.indexOf(v1);
        let index2 = arrayList.indexOf(v2);
        [arrayList[index1],arrayList[index2]] = [arrayList[index2], arrayList[index1]];
        return arrayList;
    };


    /**
     * 
     * 通过索引交换数组中的两个值
     * 
     * @since 0.2
     * @param {*} arrayList 
     * @param {*} index1 要交换的数组索引 index1
     * @param {*} index2 要交换的数组索引 index2
     * @returns {Array}
     * @author Roger Shen
     * 
     */
    _.replaceIndex = function (arrayList, index1, index2) {
        [arrayList[index1],arrayList[index2]] = [arrayList[index2], arrayList[index1]];
        return arrayList;
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

    
    /**
     * 
     * 判断第一个值是否比第二个值大
     * 
     * @since 0.1.0
     * @param {Number} v 要比较的值
     * @param {Number} o 要比较的第二个值
     * @author Roger Shen
     * @returns {Boolean}
     * 
     */
    _.gt = function (v, o) {
        return v > o ? "true" : "false";
    };

    
    /**
     * 
     * 判断第一个值是否比第二个值小
     * 
     * @since 0.1.0
     * @param {Number} v 要比较的值
     * @param {Number} o 要比较的第二个值
     * @returns {Boolean}
     * @author Roger Shen
     * 
     */
    _.lt = function (v, o) {
        return v < o ? "true" : "false";
    };


    /**
     * 
     * 判断第一个值是否大于等于第二个值
     * 
     * @since 0.1.0
     * @param {Number} v 要比较的值
     * @param {Number} o 要比较的第二个值
     * @returns {Boolean}
     * 
     */
    _.gte = function (v, o) {
        return v >= o ? "true" : "false";
    };


    /**
     * 
     * 判断第一个值是否小于等于第二个值
     * 
     * @since 0.1.0
     * @param {Number} v 要比较的值
     * @param {Number} o 要比较的第二个值
     * @returns {Boolean}
     * 
     */
    _.lte = function (v, o) {
        return v <= o ? "true" : "false";
    };

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