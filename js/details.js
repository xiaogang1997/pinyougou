window.addEventListener('load',function(){
    //******************************** 商品详情页放大镜
    function getPlusImg() {
        var imgBox = document.querySelector('.exhibition_img');
        var oimg = document.querySelector('#img');
        var mask = document.querySelector('#mask');
        var plusBox = document.querySelector('.plusBox');
        var plusImg = document.querySelector('#plusImg');
        // 图片监听事件
        imgBox.addEventListener('mouseover',moveEvent);
        imgBox.addEventListener('mouseout',outEvent);
        // 遮罩层监听事件
        // 鼠标移入 显示遮罩层和plus盒子
        function moveEvent() {
            mask.style.display = 'block';
            plusBox.style.display = 'block';
            document.addEventListener('mousemove',function(e){
                // 获取鼠标在盒子里面的坐标
                var X = e.pageX - imgBox.offsetLeft;
                var Y = e.pageY - imgBox.offsetTop;
                // 遮罩层偏移量
                var moveX = X - mask.offsetWidth/2;
                var moveY = Y - mask.offsetHeight/2;
                // 遮罩层最大偏移量
                var maxX = imgBox.offsetWidth - mask.offsetWidth;
                // 给遮罩层添加偏移量 且让鼠标在遮罩层的中间
                // 判断条件 不让遮罩层超出盒子
                if(moveX <= 0) {
                    moveX = 0;
                }else if(moveX >= maxX){
                    moveX = maxX;
                }
                mask.style.left = moveX + 'px';
                if(moveY <= 0) {
                    moveY = 0;
                }else if(moveY >= maxX) {
                    moveY = maxX
                }
                mask.style.top = moveY + 'px';
                //  计算大图片的偏移量
                // 遮罩层偏移量/最大偏移量 = 大图片偏移量/大图片最大偏移量
                var maxXPlus = plusImg.offsetWidth - plusBox.offsetWidth;
                var maxYPlus = plusImg.offsetHeight - plusBox.offsetHeight;
                plusImg.style.left = - maxXPlus * moveX / maxX + 'px';
                plusImg.style.top = - maxYPlus * moveY / maxX + 'px';
            });
        }
        // 鼠标移出 隐藏遮罩层和plus盒子
        function outEvent() {
            mask.style.display = 'none';
            plusBox.style.display = 'none';
        }
    }
    getPlusImg();
});