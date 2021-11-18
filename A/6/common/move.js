function move(obj,attr,step,target){
    step = target > parseInt(getStyle(obj,attr)) ? step : -step;
    //每一个元素都有自己的定时器
    
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //元素的初始设置，元素的非行间样式
        //调用函数
        var left = parseInt(getStyle(obj,attr)) + step;
        //设置值之前进行判断
        if((left>target && step>0) || (left<target && step<0)){
            left = target;

        }
        //设置元素的left值等于每次运动的新值
            // obj.style["left"] = left + "px";
            obj.style[attr] = left  + "px";
        //判断如果元素已经达到了目标点，就停止定时器
        if(left==target){
            clearInterval(obj.timer);
        }
    },80)

}