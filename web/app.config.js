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
        when('/close-question', {
            template: '<qt-close-question statament="Do you lose your balance because of dizziness?" ></qt-close-question>'
        }).
        when('/open', {
            template: '<qt-open statament="How many hours of sleep you get per day?"></qt-open>'
        }).
        otherwise('/');
    }
]);