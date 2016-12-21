/**
 * Created by Administrator on 2016/11/27.
 */

myapp.controller("menuCtrl",function($scope,$http){
    $http.get("allThing.json").success(function(data){
        $scope.menus=data.menu;
    })
});