/**
 * @name 数组去重
 * @description 把数组中的重复元素删除，使用polyfill
 * @param {Array}   输入原始数组
 * @return {Array}  输出去重后的数组
 * @version 0.2
 */

if(!Array.prototype.deleteRepeat){
    Array.prototype.deleteRepeat = function(){
        return Array.from(new Set(this));
    };
}
console.log([2, 2, 3, 3, 4, 5, 6, 7, 1, 4, 3].deleteRepeat());

// TODO:

// 第一种方法 for
function deleteArrayRepeat(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 第二种方法 forEach
function deleteArrayRepeat(arr) {
    let newArr = [];
    arr.forEach((ele, index, arr) => {
        if (newArr.indexOf(arr[index]) === -1) {
            newArr.push(arr[index]);
        }
    });
    return newArr;
}

function deleteArrayRepeat(arr) {
    return arr.filter((item, index, self) => self.indexOf(item) === index);
}

console.log(deleteArrayRepeat([2, 2, 3, 3, 4, 5, 6, 7, 1, 4, 3]))