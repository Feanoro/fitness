'use strict';

angular.module('fitnessApp')
    .controller('mainController', function($scope, $window, random_background){
        $scope.color = random_background;

        $scope.menu_visibility = true;

        $scope.toggleMenuVisibility = function(visible){
            $scope.menu_visibility = visible;
        };
    });