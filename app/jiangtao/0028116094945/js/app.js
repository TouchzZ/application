/**
 * Created by hxsd on 2016/11/24.
 */

    // 声明一个专用的购物车模块
angular.module("marsService",[]);

var myapp = angular.module("myapp",["ionic","marsService"]);

myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $stateProvider
        /*引导页面*/
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home/home.html",
            controller:"homeCtrl"
        })
        /*活动详情页*/
        .state("activity",{
            url:"/activity",
            templateUrl:"templates/activity/activity.html"

        })
        /*菜单页面*/
        .state("menu",{
            url:"/menu",
            templateUrl:"templates/menu/menu.html",
            controller:"menuCtrl"
        })
        /*活动页面*/
        .state("activities",{
            url:"/activities",
            templateUrl:"templates/activities/activities.html",
            controller:"activitiesCtrl"
        })
        /*食谱页面*/
        .state("recipe",{
            url:"/recipe",
            templateUrl:"templates/recipe/recipe.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,  // 抽象的，意思是不直接实例化显示这个状态
            templateUrl:"templates/tabs/tabs.html"
        })
        // 嵌套的子状态，所以需要使用“父状态.子状态”的语法来配置
        /*附近餐厅*/
        .state("tabs.nearby",{
            url:"/nearby",
            views:{"tab-nearby":{templateUrl:"templates/nearby/nearby.html",controller:"nearbyCtrl"}}
        })
        /*动态页面*/
        .state("tabs.trends",{
            url:"/trends",
            views:{"tab-trends":{templateUrl:"templates/trends/trends.html",controller:"trendsCtrl"}}
        })
        /*商城页面*/
        .state("tabs.cart",{
            url:"/cart",
            views:{"tab-cart":{templateUrl:"templates/cart/cart.html",controller:"cartCtrl"}}
        })
        /*支付页面*/
        .state("tabs.checkOut",{
            url:"/checkOut",
            views:{"tab-cart":{templateUrl:"templates/checkOut/checkOut.html",controller:"checkOutCtrl"}}
        })
        /*订单页面*/
        .state("tabs.order",{
            url:"/order",
            views:{"tab-cart":{templateUrl:"templates/order/order.html"}}
        })
        /*商品详情*/
        .state("tabs.detail", {
            url: "/detail?:id:name", // 路由传参
            views: {
                "tab-cart": {
                    templateUrl: "templates/detail/detail.html",
                    controller: "detailCtrl"
                }
            }
        });



    // 默认首页
    $urlRouterProvider.otherwise("/tour");
});

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

});