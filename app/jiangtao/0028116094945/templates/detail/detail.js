/**
 * Created by hxsd on 2016/9/1.
 */
angular.module("myapp")
    .controller("detailCtrl", function ($scope, $stateParams,dataFactory,cartShop) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var name = $stateParams.name;

        // 查询出来要显示在view中的商品数据
        var data = dataFactory.query();
        angular.forEach(data.productList, function (item) {
            if (item.name == name) {
                $scope.product = item;
                return false;   // 中断forEach循环 <=> break
            }
        });
        // 加入购物车
        $scope.add = function(product){
            // 调用购物车对象的add方法
            cartShop.add(product);
            //阻止冒泡事件
            window.event? window.event.cancelBubble = true : e.stopPropagation()
        };

        // 首先拿到购物车中的所有商品
        var cartDate = cartShop.findAll();

        // 计算所有商品的部数量
        $scope.totalNumber = function(){
            var total = 0;
            angular.forEach(cartDate,function(item){
                total += item.number;
            });
            return total;
        };
    });