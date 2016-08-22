'use strict';

angular.module('fitnessApp')
    .controller('mainController', function($scope, $window, random_background){
        $scope.color = random_background;

        $scope.menu_visibility = true;

        $scope.toggleMenuVisibility = function(visible){
            $scope.menu_visibility = visible;
        };

        $scope.questions = [
            {
                type: "qt-close-question",
                statement: "Do you lose your balance because of dizziness?",
                options: [
                    {name: "True", answer: false},
                    {name: "False", answer: false},
                    {name: "Nothing at all", answer: false}
                ],
                config: {optionsType: "button"}
            },
            {
                type: "qt-close-question",
                statement: "When do you feel sore?",
                options: [
                    {name: "0 - 12 hours after I perform exercise.", answer: false},
                    {name: "12 - 24 hours after I perform exercise.", answer: false},
                    {name: "24 - 48 hours after I perform exercise.", answer: false},
                    {name: "48 - 72 hours after I perform exercise.", answer: false},
                    {name: "I rarely ever get sore.", answer: false},
                    {name: "I’ve never felt sore in my entire life.", answer: false}
                ],
                config: {optionsType: "radio"}
            },
            /*{
                type: "qt-close-question",
                statement: {name: "Biceps", img_src: "http://localhost:8080/fitness/web/assets/img/Bicep.jpg"},
                options: [
                    {name : "Left", answer: false},
                    {name : "Right", answer: false}
                ],
                config: {statementType: "img-left"}
            },*/
            {type: "qt-multiple-selection", statement: "", options: [], config: {optionsType: "img-block"}},
            {type: "qt-open-question", statement: "", options: [], config: {optionsType: "textfield"}},
        ];
    });