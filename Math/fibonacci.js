/**
 * @name 生成斐波那契数列
 * @author Roger Shen
 * @version 0.1
 */

function fib(max) {
    var a = 0,
        b = 1,
        arr = [0,1];
    while(arr.length < max){
        [a,b] = [b, a+b];
        arr.push(b);
    }
    return arr;
}

console.log(fib(8));