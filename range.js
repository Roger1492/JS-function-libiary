/**
 * @desc 实现Python's range函数功能
 * @param {Number1}
 * @param {Number2}
 * @param {Number3}
 * @return {Array}
 */
function range(start, stop, step) {
    if (arguments.length === 0) {
        return "Sorry, you must assign at least 1 param";
    }
    let arr = []
    if(arguments.length === 1){
        for(let i = 0; i < arguments[0]; i++){
            arr.push(i);
        }
        return arr;
    }
    if(arguments.length === 2){
        for(let i = arguments[0]; i < arguments[1]; i++){
            arr.push(i);
        }
        return arr;
    }
    if(arguments.length === 3){
        for(let i = arguments[0]; i < arguments[1]; i += arguments[2]){
            arr.push(i);
        }
        return arr;
    }
    if (arguments.length > 3) {
        return "Sorry, you out of the range";
    }
}