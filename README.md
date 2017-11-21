# JS-snippets

打造自己的JavaScript代码库，片段

[根据传入的参数判断是否有这个name](#根据传入的参数判断是否有这个name)  
[随机生成指定范围内的数字](#随机生成指定范围内的数字)  
[随机生成颜色](#随机生成颜色)  
[设置滚动到距离顶部的位置](#设置滚动到距离顶部的位置)  
[找到一组数中的最大数](#找到一组数中的最大数)  
[找到一组数中的最小数](#找到一组数中的最小数)  
[递归函数](#递归函数)  
[根据keycode获得键名](#根据keycode获得键名)  
[判断是否为Email地址](#判断是否为Email地址)  
[判断是否为IP地址](#判断是否为IP地址)  
[随机生成一个IP地址](#随机生成一个IP地址)  
[实现range函数功能](#实现range函数功能)  

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

## 设置滚动到距离顶部的位置

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

## 递归函数

```javascript
    /**
     * @desc 递归函数
     * @param {Number}
     * @return {Number}
     */
    function rec(n){
        return (n===0||n===1) ? 1 : n * rec(n - 1);
    }
```

## 根据keycode获得键名

```javascript
    /**
     * @desc 根据keycode获得键名
     * @param {String}
     * @return {Number}
     */
    var keyCodeMap = {
        8: 'Backspace',
        9: 'Tab',
        13: 'Enter',
        16: 'Shift',
        17: 'Ctrl',
        18: 'Alt',
        19: 'Pause',
        20: 'Caps Lock',
        27: 'Escape',
        32: 'Space',
        33: 'Page Up',
        34: 'Page Down',
        35: 'End',
        36: 'Home',
        37: 'Left',
        38: 'Up',
        39: 'Right',
        40: 'Down',
        42: 'Print Screen',
        45: 'Insert',
        46: 'Delete',

        48: '0',
        49: '1',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: '9',

        65: 'A',
        66: 'B',
        67: 'C',
        68: 'D',
        69: 'E',
        70: 'F',
        71: 'G',
        72: 'H',
        73: 'I',
        74: 'J',
        75: 'K',
        76: 'L',
        77: 'M',
        78: 'N',
        79: 'O',
        80: 'P',
        81: 'Q',
        82: 'R',
        83: 'S',
        84: 'T',
        85: 'U',
        86: 'V',
        87: 'W',
        88: 'X',
        89: 'Y',
        90: 'Z',

        91: 'Windows',
        93: 'Right Click',

        96: 'Numpad 0',
        97: 'Numpad 1',
        98: 'Numpad 2',
        99: 'Numpad 3',
        100: 'Numpad 4',
        101: 'Numpad 5',
        102: 'Numpad 6',
        103: 'Numpad 7',
        104: 'Numpad 8',
        105: 'Numpad 9',
        106: 'Numpad *',
        107: 'Numpad +',
        109: 'Numpad -',
        110: 'Numpad .',
        111: 'Numpad /',

        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',

        144: 'Num Lock',
        145: 'Scroll Lock',
        182: 'My Computer',
        183: 'My Calculator',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };
    function getkeyName(keycode){
        if(keyCodeMap[keycode]){
            return keyCodeMap[keycode];
        } else {
            console.log("Unkown Key(Key Code: " + keycode + ")");
            return "";
        }
    }
```

## 判断是否为Email地址

```javascript
    /**
     * @desc 判断是否为Email地址
     * @param {String}
     * @return {Boolean}
     */
    function isEmail(str){
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    }
```

## 判断是否为IP地址

```javascript
    /**
     * @desc 判断是否为IP地址
     * @param {String}
     * @return {Boolean}
     */
    function isIP(str){
        return /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/.test(str);
    }
```

## 随机生成一个IP地址

```javascript
    /**
     * @desc 随机生成一个IP地址
     * @return {String}
     */
    function randomIP(){
        var r1 = Math.floor(Math.random()*256);
        var r2 = Math.floor(Math.random()*256);
        var r3 = Math.floor(Math.random()*256);
        var r4 = Math.floor(Math.random()*256);
        return r1+'.'+r2+'.'+r3+'.'+r4;
    }
```

## 实现range函数功能

```javascript
    /**
     * @desc 实现range函数功能
     * @param {Number1}
     * @param {Number2}
     * @param {Number3}
     * @return {Array}
     */
    function range(start,end,step) {
    if(arguments.length === 1){
        var arr1 = [];
        for(var i = 0; i < arguments[0]; i++){
            arr1.push(i);
        }
        return arr1;
    }
    if(arguments.length === 2){
        var arr2 = [];
        for(var j = arguments[0]; j < arguments[1]; j++){
            arr2.push(j);
        }
        return arr2;
    }
    if(arguments.length === 3){
        var arr3 = [];
        for(var u = arguments[0]; u < arguments[1]; u+=arguments[2]){
            arr3.push(u);
        }
        return arr3;
    }
}
```

## 函数getCookie

```javascript
    /**
     * @desc 函数getCookie
     * @param {String}
     * @return {Boolean}
     */
    function getCookie(cookieName){
        var cookie = document.cookie.replace(/\s/g, '').split(';');
        for(var i = 0; i < cookie.length; i++){
            var tempArr = cookie[i].split('=');
            if(tempArr[0] === cookieName){
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    }
```
