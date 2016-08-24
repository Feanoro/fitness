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
        when('/page-1', {
            template: '<index toggle-menu-visibility="toggleMenuVisibility(visible)"></index>'
        }).
        when('/page-2', {
            templateUrl: 'template/question-2.html'
        }).
        when('/page-3', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question3"></question-handler></div></div>'
        }).
        when('/page-4', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question4"></question-handler></div></div>'
        }).
        when('/page-8', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question8"></question-handler></div></div>'
        }).
        when('/page-9',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question9"></question-handler></div></div>'
        }).
        when('/page-11',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question11"></question-handler></div></div>'
        }).
        when('/page-12',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler ng-repeat="question in question12" data="question"></question-handler></div></div>'
        }).
        when('/page-15',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="question15"></question-handler></div></div>'
        }).
        when('/page-16', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler ng-repeat="question in question16" data="question"></question-handler></div></div>'
        }).
        otherwise('/');
    }
]);