import angular from 'angular';

angular.module('myApp')
    .controller('MainCtrl', [function(){
        this.message = 'Hello';
    }]);

