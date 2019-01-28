/**
 * @name 在数组随机选择一个元素
 * @description 在数组随机选择一个元素
 * @author Roger Shen
 * @version 0.1
 */

function choice(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(choice(["Lewis","Roger","Jim","Tom","Jack","John"]));