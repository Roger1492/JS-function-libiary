/**
 * @description 5星的打分评测系统
 * @param {Number}
 * @return {String}
 */

 function getRating(rating){
     if(rating > 5 && rating < 0) throw new Error("It's out of the range");
     return "★★★★★☆☆☆☆☆".substr(5-rating, 5);
 }
 console.log(getRating(2));