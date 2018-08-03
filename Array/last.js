/**
 * Returns the last element of `Array`
 * @name 返回数组中的最后一个元素
 * @since 0.1
 * @param { Array }
 * @return { * } returns the last element of `Array`
 * @author Roger Shen
 * @alias tail
 */

function last(array){
    return (array !== null && array.length) ? array[array.length-1] : undefined;
}

console.log(last([1,2,3,4,5,6,"ok"]))