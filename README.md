# JS-snippets
打造自己的JavaScript代码库，片段

[根据传入的参数判断是否有这个name](#根据传入的参数判断是否有这个name)  
[随机生成指定范围内的数字](#随机生成指定范围内的数字)  
[随机生成颜色](#随机生成颜色)  
[设置滚动到距离顶部的位置](#设置滚动到距离顶部的位置)  
[找到一组数中的最大数](#找到一组数中的最大数)  
[找到一组数中的最小数](#找到一组数中的最小数)  


## 根据传入的参数判断是否有这个name
```javascript
/**
* @desc 根据传入的参数判断是否有这个name
* @param {String} name
* @return {Boolean}
*/
function getCookie(name){

}
```

## 随机生成指定范围内的数字
```javascript
/**
* @desc 随机生成指定范围内的数字
* @param {Number1} min
* @param {Number2} max
* @return {String}
*/
function randomNumber(min,max){
    return Math.floor(min + Math.random()*(max - min));
}
```

## 随机生成颜色
```javascript
/**
* @desc 随机生成颜色
* @param {String}
*/
function randomColor(){
    return '#' + Math.floor(Math.random()*(1<<24).toString(16));
}
```

##  设置滚动到距离顶部的位置
```javascript
/**
* @desc 设置滚动到距离顶部的位置
* @param {Nummber}
* @return {Number}
*/
function setScrollTo(val){
    window.scrollTo(0,val);
    return val;
}
```

## 找到一组数中的最大数
```javascript
/**
* @desc 找到一组数中的最大数
* @param {Numbers}
* @return {Number}
*/
function max(){
    var arr = [];
    var max;
    for(var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    return arr.sort((a,b) => (b-a))[0];
}
```

## 找到一组数中的最小数
```javascript
/**
* @desc 找到一组数中的最小数
* @param {Numbers}
* @return {Number}
*/
function min(){
    var arr = [];
    var max;
    for(var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }
    return arr.sort((a,b) => (a-b))[0];
}
```
