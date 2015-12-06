/**
 * Created by waseem on 26/11/15.
 */

var artistsController = angular.module('artistsController', []);
artistsController.controller('ListController', ['$scope','$http' ,function($scope, $http){
    console.log('sssssssssssssssssssssssssssssssssssss')
    $http.get("http://localhost:63342/amirami/learn-angular/data.json")
    .success(function(response) {
            $scope.people = response;
            $scope.peopleOrder = 'name';
    });
    //

}])
