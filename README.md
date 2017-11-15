# JS-snippets
打造自己的JavaScript代码库，片段

```javascript
/**
*
* @desc 根据传入的参数判断是否有这个name
* @param {String} name
* @return {Boolean}
*/
function getCookie(name){

}
```

```javascript
/**
* 
* @desc 随机生成指定范围内的数字
* @param {Number1} min
* @param {Number2} max
* @return {String}
*
*/
function randomNumber(min,max){
    return Math.floor(min + Math.random()*(max - min));
}
```

```javascript
/**
*
* @desc 随机生成颜色
* @param {String}
*/
function randomColor(){
    return '#' + Math.floor(Math.random()*(1<<24).toString(16));
}
```

```javascript
/**
*
* @desc 设置滚动到距离顶部的位置
*/
function setScrollTo(val){
    window.scrollTo(0,val);
    return val;
}
```
