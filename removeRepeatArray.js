/**
 * @desc 数组去重
 * @param {*} arr
 * @returns {*} arr
 */
function removeRepeatArray(arr){
    return arr.filter((item,index,self) => self.indexOf(item) === index);
}
