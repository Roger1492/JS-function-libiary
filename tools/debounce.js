/**
 * @description 函数防抖
 * 
 * @param {*} func 回调函数
 * @param {Number} delay 间隔时间
 */
function debounce(func, delay) {
  let timer = null;
  return function () {
    let that = this;
    let arg = arguments;

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      func.apply(that, arg);
    }, delay);
  }
}