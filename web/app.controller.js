'use strict';

angular.module('fitnessApp')
    .controller('mainController', function($scope){
        $scope.color = "";

        $scope.updateColor = function(color){
            $scope.color = color;
        };

        $scope.menu_visibility = true;

        $scope.toggleMenuVisibility = function(visible){
            $scope.menu_visibility = visible;
        };
    });