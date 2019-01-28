/**
 * 
 * @name 返回数组中的第一个元素
 * @since 0.1.0
 * @author Roger Shen
 * @param { Array }
 * @return { * } returns the first element of `Array`
 * 
 * @example
 * => console.log(first(["test", 4, 5, 6, 7]))
 * => 'test'
 */

function first(array) {
    return (array !== null && array.length) ? array[0] : undefined;
}