/**
 * @param obj 具体是哪一个元素，例如：div span button。。。。。
 * @param attr 具体哪一个元素下的什么属性，例如：width，height，left，top，opacity。。。。
 */
function getStyle(obj,attr){
    //标准浏览器 ie9+
    // console.log(window.getComputedStyle(obj)[attr]);
    //ie8已经以下
    // console.log(obj.currentStyle[attr]);
    
    
    
    //兼容
    if(getComputedStyle){
        return getComputedStyle(obj)[attr]
    }else{
        return obj.currentStyle[attr]
    }
}