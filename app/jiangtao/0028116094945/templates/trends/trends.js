/**
 * Created by Administrator on 2016/11/26.
 */

myapp.controller("trendsCtrl",function($scope,$http){
    $http.get("allThing.json").success(function(data){
       $scope.trends=data.trends;
    })
});