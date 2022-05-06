/**
 * 
 * @param {obj} 被拖拽的元素 
 */
function Drag(obj){
    obj.onmousedown = function(ev){
        //元素的设置全局捕获
        //专门解决ie8以下浏览器的默认行为问题
        //标准浏览器：undefined
        if(obj.setCapture){
            obj.setCapture();
        }

    


        //所有不变化的值都放在这个事件中
        //鼠标点到元素的距离
        var ev = ev||window.event;
        var x = ev.offsetX;
        var y = ev.offsetY;

        //屏幕的可视宽度和高度
        var screen_width = document.documentElement.clientWidth;
        var screen_height = document.documentElement.clientHeight;

        var div_width = obj.offsetWidth;
        var div_height = obj.offsetHeight;


        document.onmousemove = function(ev){
            //只要是变化中的值都在这个事件中
            //鼠标点到body的距离
            var ev = ev || window.event;
            var x1 = ev.clientX;
            var y1 = ev.clientY;
            var move_left = x1-x;
            var move_top = y1-y;
            //判断元素的运动边界
            if(move_left<0){
                move_left = 0;
            }else if(move_left>screen_width-div_width){
                move_left = screen_width-div_width;
            }
            if(move_top<0){
                move_top = 0;
            }else if(move_top>screen_height-div_height){
                move_top = screen_height-div_height;
            }



            obj.style.left = move_left+'px';
            obj.style.top = move_top+'px';
        }

        document.onmouseup = function(){
            //释放元素的设置全局捕获
            if(obj.releaseCapture){
                obj.releaseCapture();
            }

            //取消事件移动行为
            document.onmousemove = null;
        }
        //取消浏览器在认为用户选中文字的默认行为
        return false;
            
    }
}

/**
 * 
 * @param {obj1} 移动元素
 * @param {obj2} 固定元素
 */
function Drag1(obj1,obj2){
    //1，元素1被按下的时候
    obj1.onmousedown = function(ev){
        //鼠标点到元素的距离？？ offsetX offsetY

        //全局捕获
        if(obj1.setCapture){
            obj1.setCapture();
        }

        var ev = ev || window.event;
        var x = ev.offsetX;
        var y = ev.offsetY;

        //屏幕的可视宽度和高度
        var screen_width = document.documentElement.clientWidth;
        var screen_height = document.documentElement.clientHeight;

        //元素的宽度和高度
        var box1_width = obj1.offsetWidth;
        var box1_height = obj1.offsetHeight;


        //获取box2的四条边的边距
        var box2_left = obj2.offsetLeft;
        var box2_top = obj2.offsetTop;
        var box2_right = box2_left + obj2.offsetWidth;
        var box2_bottom = box2_top + obj2.offsetHeight;

        document.onmousemove = function(ev){
            //鼠标点到body的距离
            var ev = ev || window.event;
            var cx = ev.clientX;
            var cy = ev.clientY;

            var move_left = cx - x;
            var move_top = cy - y;
            if(move_left<0){
                move_left = 0;
            }else if(move_left>screen_width-box1_width){
                move_left = screen_width-box1_width;
            }if(move_top<0){
                move_top = 0;
            }else if(move_top>screen_height-box1_height){
                move_top = screen_height-box1_height;
            }


            obj1.style.left = move_left+'px';
            obj1.style.top = move_top+'px';

            //两个元素的比较
            //获取box1的四条边的边距
            var box1_left = move_left;
            var box1_top = move_top;
            var box1_right = box1_left + obj1.offsetWidth;
            var box1_bottom = box1_top + obj1.offsetHeight;
            
            if(box1_right<box2_left || box1_left>box2_right || box1_bottom<box2_top || box1_top>box2_bottom){
                obj2.style.background = "wheat";
            }else{
                obj2.style.background = "orange";
            }


        }
        document.onmouseup = function(){

            //释放全局捕获
            if(obj1.releaseCapture){
                obj1.releaseCapture();
            }

            //取消移动事件
            document.onmousemove = null;
            // document.onmouseup = null;
        }
        return false;
    }
}