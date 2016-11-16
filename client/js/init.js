import angular from 'angular';
angular.module('myApp', [require('angular-route')])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/assets/templates/main.html',
                controller: 'MainCtrl as main'
            })
    }]);

