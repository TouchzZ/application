/**
 * Created by hxsd on 2016/12/13.
 */
$(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"../../exhibition.json",
        success: function(data,status,xhr){
           for(var i=0;i<data.length;i++){
               (function(i){
                   var item =
                       "<div class=item>"+
                       '<div class=itemPic><a href=auditorium.html?id='+ i +'><img src='+data[i].imgsrc+'></a></div>'+
                       '<div class="itemDesc">'+
                       '<p class=name>'+data[i].name+'</p>'+
                       '<p class="desc">客房设施齐全、舒适<br>房间色调柔和，充满东方古典韵味<br>设有步入式衣帽间，休息区与工作区<br>提供全方位的至尊享受。</p>'+
                   '</div>'+
                       '</div>'
                   $(item).appendTo($("#roomList"))
               })(i)
           }
            $("#roomList").children().find(".itemDesc").eq(0).find(".desc").css("display","block").end().parent().siblings().find(".itemDesc .desc").css("display","none")
        }
    });

});