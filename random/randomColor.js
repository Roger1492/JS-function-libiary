/**
 * @description 随机生成颜色
 * @param {String} HSL,RGBA,HEX
 * @param {Number} 要生成的数量
 * @return {String}
 */

function randomColor(type='hex', num=1) {
    let colorArr = [];

    if(type === 'hsl' || type ==='hsla'){
        let all;
        for(let i = 0; i < num; i++){
            let h = Math.floor(Math.random() * 360);
            let s = Math.floor(Math.random() * 100) + '%';
            let l = Math.floor(Math.random() * 100) + '%';
            let a = Math.random().toFixed(2);
            all = `hsla(${h},${s},${l},${a})`;
            colorArr.push(all);
        }
        return colorArr;
    }

    if(type === 'rgb' || type === 'rgba'){
        let all;
        for(let i = 0; i < num; i++){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let a = Math.random().toFixed(2);
            all = `rgba(${r},${g},${b},${a})`;
            colorArr.push(all);
        }
        return colorArr;
    }

    if(type === 'hex'){
        for(let i = 0; i < num; i++){
            let r = '#' + Math.floor(Math.random() * (1 << 24)).toString(16);
            colorArr.push(r);
        }
        return colorArr;
    }

}