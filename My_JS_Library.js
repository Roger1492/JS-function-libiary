function JT() { };
let _ = new JT();

/////////////////////////////
///////// 数组方法
/////////////////////////////

// 返回数组中的第一个元素
JT.prototype.first = function (array) {
    return (array != null && array.length) ? array[0] : undefined;
},

// 返回数组中的最后一个元素
JT.prototype.last = function (array) {
    return (array !== null && array.length) ? array[array.length - 1] : undefined;
}

// 返回数组所有元素之和
JT.prototype.sum = function(array){
    return array.reduce((a,b) => a+b);
}

// 返回数组所有元素之积
JT.prototype.times = function(array){
    return array.reduce((a,b) => a*10+b);
}