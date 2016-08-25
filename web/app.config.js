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
            templateUrl: 'template/question-2.html',
            resolve: {
                question2: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question2.json');
                }
            }
        }).
        when('/page-3', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question3"></question-handler></div></div>',
            resolve: {
                question3: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question3.json');
                }
            }
        }).
        when('/page-4', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question4"></question-handler></div></div>',
            resolve: {
                question4: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question4.json');
                }
            }
        }).
        when('/page-8', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question8"></question-handler></div></div>',
            resolve: {
                question8: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question8.json');
                }
            }
        }).
        when('/page-9',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question9"></question-handler></div></div>',
            resolve: {
                question9: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question9.json');
                }
            }
        }).
        when('/page-11',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question11"></question-handler></div></div>',
            resolve: {
                question11: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question11.json');
                }
            }
        }).
        when('/page-12',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler ng-repeat="question in $resolve.question12" data="question"></question-handler></div></div>',
            resolve: {
                question12: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question12.json');
                }
            }
        }).
        when('/page-15',{
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler data="$resolve.question15"></question-handler></div></div>',
            resolve: {
                question15: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question15.json');
                }
            }
        }).
        when('/page-16', {
            template: '<div class="mdl-grid"><div class="mdl-cell mdl-cell--2-offset mdl-cell--10-col"><question-handler ng-repeat="question in $resolve.question16" data="question"></question-handler></div></div>',
            resolve: {
                question16: function(getData){
                    return getData('http://localhost:8080/fitness/web/data/question16.json');
                }
            }
        }).
        otherwise('/');
    }
]);