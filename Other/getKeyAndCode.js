/**
 * @description 引入到HTML文档中，随意按键盘上的一个键，即可输出keyCode和key。
 * 
 */

document.body.innerHTML = "在键盘上随意按键，即可确定KeyCode和Key<div></div>";
let div = document.getElementsByTagName("div")[0];
div.style.width = "360px";
div.style.height = "100px";
div.style.lineHeight = "100px";
div.style.textAlign = "center";
div.style.margin = "200px auto";
div.style.fontSize = "100px";

function KeyAndCode(){
    document.addEventListener("keypress", function(e){
        div.innerHTML = e.key + " - " + e.keyCode;
    }, false);
}

KeyAndCode();