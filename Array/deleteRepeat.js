/**
 * @name 数组去重
 * @description 把数组中的重复元素删除，使用polyfill
 * @param {Array}   输入原始数组
 * @return {Array}  输出去重后的数组
 * @version 0.2
 */

// 第一种方法
if (!Array.prototype.deleteRepeat) {
    Array.prototype.deleteRepeat = function () {
        return Array.from(new Set(this));
    };
}

// 第二种方法
if (!Array.prototype.deleteRepeat) {
    Array.prototype.deleteRepeat = function () {
        return this.filter((item, index, self) => self.indexOf(item) === index)
    };
}


// 第三种方法
if (!Array.prototype.deleteRepeat) {
    Array.prototype.deleteRepeat = function () {
        let newArr = [];
        for (let i = 0; i < this.length; i++) {
            if (newArr.indexOf(this[i]) === -1) {
                newArr.push(this[i]);
            }
        }
        return newArr;
    };
}

// 第四种方法
if (!Array.prototype.deleteRepeat) {
    Array.prototype.deleteRepeat = function () {
        let newArr = [];
        this.forEach((ele, index, arr) => {
            if (newArr.indexOf(this[index]) === -1) {
                newArr.push(this[index]);
            }
        })
        return newArr;
    };
}

console.log([2, 2, 3, 3, 4, 5, 6, 7, 1, 4, 3].deleteRepeat());