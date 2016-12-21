/**
 * Created by hxsd on 2016/12/19.
 */
$(function(){
    var url=window.location.search;
    var id=url.substr(url.indexOf("=")+1);
    console.log(id)
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"../../deliciousDetail.json",
        success: function(data,status,xhr){
            $("#mainContent").find(".swiper-slide").each(function(i){
                $(this).html("<img src="+data[id].imgsrc[i]+">");
            })
            $("#subTitle").html(data[id].name)
        }
    });

});