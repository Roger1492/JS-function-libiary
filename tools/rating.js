/**
 * @description 5星的打分评测系统
 * @param {Number}
 * @return {String}
 * @version 0.1.0
 * @author Roger Shen
 * 
 * @example
 * =>  console.log(Rating(2));
 * => ★★☆☆☆
 */

 function Rating(rating){
     if(rating > 5 && rating < 0) throw new Error("It's out of the range");
     return "★★★★★☆☆☆☆☆".slice(5-rating, 10-rating);
 }

 console.log(Rating(3));