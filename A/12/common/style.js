function getStyle(obj,attr){
    // console.log(window.getComputedStyle.属性名);  标准浏览器
    // console.log(obj.currentStyle.属性名);  //IE

    if(window.getComputedStyle){
        return window.getComputedStyle(obj)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}