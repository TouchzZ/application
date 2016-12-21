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
        url:"../../roomDetail.json",
        success: function(data,status,xhr){

        }
    });

});