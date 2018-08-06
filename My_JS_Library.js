(function () {
    var root = this;
    var _ = {};
    root._ = _;

    /////////////////////////////
    ///////// Array 方法 //////////
    ////////////////////////////


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
    _.flat = function (array) {
        return array.reduce((a, b) => a.concat(b));
    }

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

    _.first = function (array) {
        return (array != null && array.length) ? array[0] : undefined;
    }


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
    _.last = function (array) {
        return (array !== null && array.length) ? array[array.length - 1] : undefined;
    }


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
    }


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
    }



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
    _.times = function (array) {
        let newArr = [];
        array.forEach((ele, ind, arr) => {
            let newE = parseInt(ele);
            newE / newE === 1 ? newArr.push(newE) : '';
        })
        return newArr.reduce((a, b) => a * b);
    }


    /**
     * 数组去重
     * 
     * @since 0.1.0
     * @param {*}
     * @returns {*}
     * @author Roger Shen
     */
    _.deleteRepeats = function (array) {
        return Array.from(new Set(array));
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
        let l = array.length;
        let rnd = Math.floor(Math.random() * l);
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
    /////////////////////////////


    /**
     * @since 0.1.0
     * @param {None}
     * @returns {String} the value of the color with hex;
     * @author Roger Shen
     * 
     * @example 
     * _.randomColor()
     * // => #dc8ccb
     */
    _.randomColor = function(){
        return "#" + Math.floor(Math.random()* (1 << 24)).toString(16);
    }


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
    }

})()
