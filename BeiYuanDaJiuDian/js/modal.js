/**
 * Created by hxsd on 2016/12/21.
 */
$(function(){
    /*弹框*/
//屏幕中心显示
    function showCenter(obj){
        obj.style.display="block";
        var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
        var t=(document.documentElement.clientHeight-obj.offsetHeight)/2
        obj.style.left=l+'px';
        obj.style.top=t+'px';
    };

    var reserve=document.getElementById("reserve");
    var contactBox=document.getElementById("contactBox");
    var closeBtn=document.getElementById("cancel");
    var modalLayer=document.getElementsByClassName('modal')[0];
    //弹窗弹框
    reserve.onclick=function(){
        modalLayer.style.display=contactBox.style.display="block";
        showCenter(contactBox);//中心显示
    };
    closeBtn.onclick=function(){
        modalLayer.style.display=contactBox.style.display="none";
    }
});