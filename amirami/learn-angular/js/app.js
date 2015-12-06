/**
 * Created by waseem on 30/11/15.
 */

var amirami = angular.module('amirami',[
    'ngRoute',
    'Ctrls'
]);

amirami.config('$routeProvider', function($routeProvider){
    console.log('dddddddddddddddddddddddd')
    $routeProvider
        .when('/list', {
            templateUrl : 'partials/list.html',
            controller : 'artistsController'
        })
        .otherwise({
            redirectTo: '/list'
        })
})