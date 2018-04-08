/**
 * @description 实现对象的浅克隆
 * @param {Object}
 * 
 */

 function shadowClone(o){
     let obj = {};
     for(let i in o){
         obj[i] = o[i]
     }
     return obj;
 }

let oldObj = {
    a:1,
    b:['e','h','k'],
    c:{p:{n:6}}
}
let newObj = shadowClone(oldObj);
console.log(newObj.a === oldObj.a);