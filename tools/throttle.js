/**
 * @description 函数节流
 * 
 * @param {*} func 回调函数
 * @param {Number} delay 间隔时间
 */

// 1，时间戳的方式实现
function throttle(func, delay) {
  let pre = 0;

  return function () {
    let now = +new Date();
    let that = this;
    let arg = arguments;
    if (now - pre > delay) {
      func.apply(that, arg);
      pre = now;
    }
  }
}


// 2,使用定时器方式实现
// function throttle(func, delay){
//   let timer;
//   let pre = 0;

//   return function(){
//     let that = this;
//     let arg = arguments;
//     if(!timer){
//       timer = setTimeout(function(){
//         timer = null;
//         func.apply(that, arg);
//       }, delay)
//     }
//   }
// }