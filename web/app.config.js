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
            templateUrl: 'template/question-1.html',
            resolve: {
                question1: function(getData){
                    return getData('data/question1.json');
                }
            }
        }).
        when('/page-2', {
            template: '<question-handler data="$resolve.question2"></question-handler>',
            resolve: {
                question2: function(getData){
                    return getData('data/question2.json');
                }
            }
        }).
        when('/page-3', {
            template: '<question-handler data="$resolve.question3"></question-handler>',
            resolve: {
                question3: function(getData){
                    return getData('data/question3.json');
                }
            }
        }).
        when('/page-4', {
            template: '<question-handler data="$resolve.question4"></question-handler>',
            resolve: {
                question4: function(getData){
                    return getData('data/question4.json');
                }
            }
        }).
        when('/page-6', {
            template: '<question-handler data="$resolve.question6"></question-handler>',
            resolve: {
                question6: function(getData){
                    return getData('data/question6.json');
                }
            }
        }).
        when('/page-7', {
            template: '<question-handler data="$resolve.question7"></question-handler>',
            resolve: {
                question7: function(getData){
                    return getData('data/question7.json');
                }
            }
        }).
        when('/page-8', {
            template: '<question-handler data="$resolve.question8"></question-handler>',
            resolve: {
                question8: function(getData){
                    return getData('data/question8.json');
                }
            }
        }).
        when('/page-9',{
            template: '<question-handler data="$resolve.question9"></question-handler>',
            resolve: {
                question9: function(getData){
                    return getData('data/question9.json');
                }
            }
        }).
        when('/page-10',{
            template: '<question-handler ng-repeat="question in $resolve.question10" data="question"></question-handler>',
            resolve: {
                question10: function(getData){
                    return getData('data/question10.json');
                }
            }
        }).
        when('/page-11',{
            template: '<question-handler data="$resolve.question11"></question-handler>',
            resolve: {
                question11: function(getData){
                    return getData('data/question11.json');
                }
            }
        }).
        when('/page-12',{
            template: '<question-handler ng-repeat="question in $resolve.question12" data="question"></question-handler>',
            resolve: {
                question12: function(getData){
                    return getData('data/question12.json');
                }
            }
        }).
        when('/page-13',{
            template: '<question-handler data="$resolve.question13"></question-handler>',
            resolve: {
                question13: function(getData){
                    return getData('data/question13.json');
                }
            }
        }).
        when('/page-15',{
            template: '<question-handler data="$resolve.question15"></question-handler>',
            resolve: {
                question15: function(getData){
                    return getData('data/question15.json');
                }
            }
        }).
        when('/page-16', {
            template: '<question-handler ng-repeat="question in $resolve.question16" data="question"></question-handler>',
            resolve: {
                question16: function(getData){
                    return getData('data/question16.json');
                }
            }
        }).
        otherwise('/');
    }
]);