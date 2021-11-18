function getstyle(obj,attr){
    if(window.getComputedStyle){
        //主流浏览器
        // console.log(getComputedStyle(div).width);
        // console.log(getComputedStyle(obj)[attr]);

        //
        return getComputedStyle(obj)[attr]

    }else{
        // console.log(div.currentStyle).width;
        // console.log(obj.currentStyle.attr);
        // console.log(obj.currentStyle[attr]);
        //
        return obj.currentStyle[attr]

    }
}