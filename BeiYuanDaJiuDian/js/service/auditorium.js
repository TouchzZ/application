/**
 * Created by hxsd on 2016/12/15.
 */
$(function(){
    $.ajax({
        type:"GET",dataType:"json",
        url:"../../json/baogao.json",
        success:function(data){
            for(var i=0;i<data.length;i++){
                (function(i){
                    var item=
                        '<div class="swiper-slide"  style="height: 7.4rem;width: 5.3rem;background: #fff !important;">'+
                        '<div class="top">'+
                        '<h3>'+data[i].name+'</h3>'+
                        '<p class="title">面积：'+data[i].area+'</p>'+
                        '<p class="title">'+data[i].spec+'</p>'+
                        '<p class="content" style="margin-top: 0.12rem">专业的会议技术支持</p>'+
                        '<p class="content">专属会议管家</p>'+
                        '<p class="content">现代化的会议设备及活动设施</p>'+
                        '</div>'+
                        '<div class="bot">'+
                        '<img src='+data[i].imgsrc+'>'+
                        '<div class="circle"></div>'+
                        '</div>'+
                        '</div>'
                    $("#swiperfirst").append(item)
                })(i)
            }
            var swiperV = new Swiper('.swiper-container-v', {
                effect : 'coverflow',
                slidesPerView: 1.35,
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                coverflow:{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows : true
                }
            })

        }
    });

})