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
        when('/true-false', {
            template: '<qt-true-false statament="Do you lose your balance because of dizziness?"></qt-true-false>'
        }).
        when('/open', {
            template: '<qt-open statament="How many hours of sleep you get per day?"></qt-open>'
        }).
        otherwise('/');
    }
]);