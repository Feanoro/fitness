'use strict';

angular.module('fitnessApp')
.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/', {
            template: '<index toggle-menu-visibility="toggleMenuVisibility(visible)"></index>'
        }).
        when('/register', {
            template: '<register></register>'
        }).
        when('/close-question', {
            template: '<qt-close-question></qt-close-question>'
        }).
        when('/close-question-radio', {
            template: '<qt-close-question options-type="radio"></qt-close-question>'
        }).
        when('/open', {
            template: '<qt-open-question></qt-open-question>'
        }).
        when('/multiple', {
            template: '<qt-multiple-selection update-background-color="updateColor(color)"></qt-multiple-selection>'
        }).
        when('/multiple-img-block', {
            template: '<qt-multiple-selection options-type="img-block"></qt-multiple-selection>'
        }).
        when('/close-question-multiple', {
            templateUrl: 'template/close-question-multiple.html'
        }).
        when('/quiz', {
            templateUrl: 'template/quiz.html'
        }).
        otherwise('/');
    }
]);