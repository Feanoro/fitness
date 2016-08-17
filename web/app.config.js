'use strict';

angular.module('fitnessApp')
.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/', {
            template: '<index update-background-color="updateColor(color)" toggle-menu-visibility="toggleMenuVisibility(visible)"></index>'
        }).
        when('/register', {
            template: '<register update-background-color="updateColor(color)"></register>'
        }).
        when('/close-question', {
            template: '<qt-close-question update-background-color="updateColor(color)" ></qt-close-question>'
        }).
        when('/close-question-radio', {
            template: '<qt-close-question update-background-color="updateColor(color)" question-type="radio"></qt-close-question>'
        }).
        when('/open', {
            template: '<qt-open update-background-color="updateColor(color)"></qt-open>'
        }).
        when('/multiple', {
            template: '<qt-multiple-selection update-background-color="updateColor(color)"></qt-multiple-selection>'
        }).
        when('/multiple-img-block', {
            template: '<qt-multiple-selection update-background-color="updateColor(color)" question-type="img-block"></qt-multiple-selection>'
        }).
        when('/close-question-multiple', {
            template: '<qt-close-question update-background-color="updateColor(color)" ></qt-close-question>' +
                        '<qt-multiple-selection update-background-color="updateColor(color)"></qt-multiple-selection>'
        }).
        otherwise('/');
    }
]);