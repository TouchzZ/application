/**
 * Created by Administrator on 2016/11/27.
 */

myapp.controller("checkOutCtrl",function($scope,cartShop){
    // 首先拿到购物车中的所有商品
    $scope.cart = cartShop.findAll();

    // 计算所有商品的部数量
    $scope.checkNumber = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += item.number;
        });
        return total;
    };

    // 计算购物车中所有商品的总金额
    $scope.summary = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total += item.number * item.product.price;
        });
        return total;
    };

    // 删除指定的商品
    $scope.remove = function(item){
        cartShop.remove(item.product.name);
    };
    //点击减少和增加按钮
    $scope.reduce=function(item){
        if( item.number==0) return;
        item.number--
    };
    $scope.plus=function(item){
        item.number++
    }
});