/**
 * Created by Administrator on 2016/11/26.
 */
myapp.controller("cartCtrl",function($scope,$http,cartShop,$state,$ionicViewSwitcher,dataFactory){
    $http.get("allThing.json").success(function(data){
        $scope.products=data.products;
        $scope.categories=data.categories;

        /*显示商品类别*/
        $scope.selectedCategory = null;
        // 响应用户选择商品类别的click事件:参数就是被选中的商品类别名称
        $scope.selectCategory = function(category){
            $scope.selectedCategory = category;
        };
        // 定义一个过滤函数，根据当前被选中的商品类别来过滤
        // 参数是由框架传过来的被过滤的元素 - 这里是被过滤商品数组中的每一个商品对象
        $scope.filterByCategory = function(product){
            return $scope.selectedCategory == null || product.category == $scope.selectedCategory;
        };
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
    // 查询出来要显示在view中的商品数据
    $scope.data = dataFactory.query();

    // 跳转
    $scope.toDetail = function(product){
        $state.go("tabs.detail",{id:"1001",name:product.name});
        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
});