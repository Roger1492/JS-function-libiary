/**
 * 
 * @name 返回数组中的最后一个元素
 * @since 0.1
 * @param { Array }
 * @return { * } returns the last element of `Array`
 * @author Roger Shen
 * 
 * @example
 * => console.log(last([1,2,3,4,5,6,"ok"]))
 * => 'ok'
 */

function last(array){
    return (array !== null && array.length) ? array[array.length-1] : undefined;
}