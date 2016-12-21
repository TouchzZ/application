/**
 * Created by Administrator on 2016/11/26.
 */

myapp
    .controller("homeCtrl",function($scope,$http,$ionicSlideBoxDelegate,$ionicModal,$ionicActionSheet){
    $http.get("allThing.json").success(function(data){
            $scope.selected=data.selected;
            $scope.trends=data.trends;
    });

    /*点击喜欢*/
    $scope.addNum=function(select){
        $scope.num=select.like++;

    };

    $scope.next = function(){
        $ionicSlideBoxDelegate.$getByHandle("main").slide(1);
    };
    $scope.previous = function(){
        $ionicSlideBoxDelegate.$getByHandle("main").slide(0);
    };
   $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    // 构造模式对话框 - 创建仅服务于当前页面的子页面
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'  // 内置了一种动画，其余是自己写的
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
        animation: 'slide-in'
    }).then(function(modal) {
        // 将这个模态对话框保存到一个变量中，方便以后再使用
        $scope.modal = modal;   // 传入的参数model就是构造好的对话框
    });

    $scope.openModal = function() {
        $scope.modal.show();        // 打开对话框
    };

    //分享界面
    $scope.closeModal = function() {
        $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
    };
        $scope.show = function() {
           $ionicActionSheet.show({
                buttons: [
                    { text: '<b>分享</b> ' },
                ],
                destructiveText: '删除',
                titleText: '',
                cancelText: '取消',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    return true;
                }
            });
 };});

