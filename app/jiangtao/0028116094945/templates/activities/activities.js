/**
 * Created by Administrator on 2016/11/27.
 */

myapp.controller("activitiesCtrl",function($scope,$http){
    $http.get("allThing.json").success(function(data){
       $scope.activities=data.activities
    })
});