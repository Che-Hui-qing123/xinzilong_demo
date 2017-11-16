(function ($) {
    function slider(ele, options) {
        var $ele = $(ele);
        var defaults = {
            delay: 1000,
            interval: 2000
        }
        
        var settings = $.extend({}, defaults, options);
        $ele.find('.imgBox img').each(function (index, item) {
            $(this).css({
                left: index * 700
            })
        })
        // 表示起始图片和当前轮播到的图片索引
        var index = 0;
        // 上一张轮播图片的 索引
        var lastIndex = 0;

        // 点击上一张时，获取将要显示图片的索引
        function getPrevIndex() {
            return index <= 0 ? $ele.find('.imgBox img').length - 1 : index - 1;
        }
        // 点击下一张时，获取将要显示图片的索引
        function getNextIndex() {
            return index >= $ele.find('.imgBox img').length - 1 ? 0 : index + 1;
        }

        // 显示下一张图片
        function showNextImage() {
            // 获取当前需要显示图片的索引
            index = getNextIndex();

            $ele.find('.imgBox img').eq(index).finish().css({
                left: 700
            }).animate({
                left: 0
            }, settings.delay)

            $ele.find('.imgBox img').eq(lastIndex).finish().animate({
                left: -700
            }, settings.delay)
            $ele.find('.indicators span').eq(lastIndex).removeClass('current');
            $ele.find('.indicators span').eq(index).addClass('current');
            lastIndex = index;
        }

        // 显示上一张图片
        function showPrevImage() {
            index = getPrevIndex();
            $ele.find('.imgBox img').eq(index).finish().css({
                left: -700
            }).animate({
                left: 0
            }, settings.delay);

            $ele.find('.imgBox img').eq(lastIndex).finish().animate({
                left: '7rem'
            }, settings.delay)

            $ele.find('.indicators span').eq(lastIndex).removeClass('current');
            $ele.find('.indicators span').eq(index).addClass('current');
            lastIndex = index;
        }

        $ele.find('#next').click(function () {
            showNextImage();
        })

        $ele.find('#prev').click(function () {
            showPrevImage();
        })

        // 自动播放
        var timer = setInterval(showNextImage, settings.interval);

        $ele.find('.indicators span').hover(function () {
            clearInterval(timer);
            // 当前鼠标所在span的索引
            index = $(this).index();
            if (index > lastIndex) {
                index = index - 1;
                showNextImage();
            } else if (index < lastIndex) {
                index = index + 1;
                showPrevImage();
            } else {
                // 相等时，不改变
            }
        }, function () {
            timer = setInterval(showNextImage, settings.interval);
        })

        $ele.find('.buttons span').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(showNextImage, settings.interval);
        })
    }

    $.fn.slider = function(options){
        return this.each(function(index,ele){
            slider(ele,options);
        })
    }
})(jQuery);

console.log($('.modal-buttons '))