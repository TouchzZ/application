/**
 * Created by hxsd on 2016/12/13.
 */
$(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"../../entertainment.json",
        success: function(data,status,xhr){
           for(var i=0;i<data.length;i++){
               (function(i){
                   var item =
                   '<div class="item">'+
                       '<a href=Bodybuilding.html?id='+i+'><img src='+data[i].imgsrc+'></a>'+
                       '<div class="item_ifo" >'+
                        '<p>'+data[i].desc+'</p>'+
                       '<p>'+data[i].name+'</p>'+
                  ' </div>'+
                  ' </div>'
                   $(item).appendTo( $("#items"))
               })(i)
           }
            $("#roomList").children().find(".itemDesc").eq(0).find(".desc").css("display","block").end().parent().siblings().find(".itemDesc .desc").css("display","none")
        }
    });
});