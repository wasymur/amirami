/**
 * Created by waseem on 26/11/15.
 */

var amirami = angular.module('amirami', []);
amirami.controller('amiramiCtrl', ['$scope','$http' ,function($scope, $http){
    $http.get("http://localhost:63342/amirami/learn-angular/data.json")
    .success(function(response) {
            $scope.people = response;
            $scope.peopleOrder = 'name';
    });
    //

}])
