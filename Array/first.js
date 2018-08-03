/**
 * Returns the first element of `Array`
 * @name 返回数组中的第一个元素
 * @since 0.1
 * @author Roger Shen
 * @param { Array }
 * @return { * } returns the first element of `Array`
 * @alias head
 * 
 */

function first(array) {
    return (array !== null && array.length) ? array[0] : undefined;
}

console.log(first(["test", 4, 5, 6, 7]))