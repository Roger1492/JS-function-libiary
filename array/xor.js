/**
 * 
 * @description 返回两个数组中的不同元素组成的新数组
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array}
 * @author Roger Shen
 * @version 0.1.0
 * 
 * @example
 * => console.log(xor(['a','b',1],[1,2,'a']));
 * => ['b',2]
 * 
 * => console.log(xor(['a','b'],[1,2]));
 * => [ 'a', 'b', 1, 2 ]
 */

function xor(array1, array2) {
    let newArr = [];
    array1.forEach((ele1, ind1, arr1) => {
        if (!array2.includes(ele1)) {
            newArr.push(ele1);
        }
        return newArr;
    })

    array2.forEach((ele2, ind2, arr2) => {
        if (!array1.includes(ele2)) {
            newArr.push(ele2);
        }
        return newArr;
    })

    return newArr;
};

console.log(xor(['a', 'b'], [1, 2, 'a']));