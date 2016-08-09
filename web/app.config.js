'use strict';

angular.module('fitnessApp')
.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/', {
            template: '<index></index>'
        }).
        when('/register', {
            template: '<register></register>'
        }).
        otherwise('/');
    }
]);