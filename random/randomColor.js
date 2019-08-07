/**
 * @description 随机生成颜色
 * @param {String} HSL,RGBA,HEX
 * @param {Number} 要生成的数量
 * @return {String}
 */

function randomColor(type='hex', num=1) {
    let colorArr = [];

    if(type === 'hsl' || type ==='hsla'){

    }

    if(type === 'rgb' || type === 'rgba'){

    }

    if(type === 'hex'){
        for(let i = 0; i < num; i++){
            let r = '#' + Math.floor(Math.random() * (1 << 24)).toString(16);
            colorArr.push(r);
        }
        return colorArr;
    }

}


console.log(randomColor());