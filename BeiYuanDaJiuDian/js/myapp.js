/**
 * Created by Administrator on 2016/12/9.
 */

window.onload=function(){

    //初始化字体大小
    var html=document.documentElement;
    var hW=html.getBoundingClientRect().width;
    html.style.fontSize=hW/7.5+"px";

    /*侧边栏*/
    var toggleMenu = function() {
        swiper.slideNext();
        swiper.activeIndex =1;
    };
    var menuButton = document.getElementsByClassName('menu-button')[0];
    var swiper = new Swiper('.swiper-container', {
        onInit:function(){
            menuButton.addEventListener('click', toggleMenu, false);
        },
        slidesPerView: 'auto',
        onSlideChangeEnd: function(slider) {
            if (slider.activeIndex == 1)
                menuButton.removeEventListener('click', toggleMenu, false);
            else
                menuButton.addEventListener('click', toggleMenu, false);
        },
        slideToClickedSlide: true
    });

    var swiperV = new Swiper('.swiper-container-v', {
        nested:true,

        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        spaceBetween: 50
    });
    var swiperW = new Swiper('.swiper-container-w', {
        loop:true,
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
};


