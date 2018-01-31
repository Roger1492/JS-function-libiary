/**
 * @desc 实现range函数功能
 * @param {Number1}
 * @param {Number2}
 * @param {Number3}
 * @return {Array}
 */
function range(start, stop, step) {
    if (arguments.length === 0) {
        return "Sorry, you must assign at least 1 param";
    }
    if (arguments.length === 1) {
        let arr1 = [];
        for (let i = 0; i < arguments[0]; i++) {
            arr1.push(i);
        }
        return arr1;
    }
    if (arguments.length === 2) {
        let arr2 = [];
        for (let i = arguments[0]; i < arguments[1]; i++) {
            arr2.push(i);
        }
        return arr2;
    }
    if (arguments.length === 3) {
        let arr3 = [];
        for (let i = arguments[0]; i < arguments[1]; i += arguments[2]) {
            arr3.push(i)
        }
        return arr3;
    }
    if (arguments.length > 3) {
        return "Sorry, you out of the range";
    }
}
