'use strict';

function droprightSelectionController($scope){
    $scope.toggleAnswer = function(option){
        option.answer = option.answer ? false : true;
    };
}
angular.module('fitnessApp')
    .directive('droprightSelection', function($window, $animate){
        return {
            scope: {
                name: '<',
                options: '='
            },
            templateUrl: 'directives/dropright-selection/dropright-selection.template.html',
            controller: droprightSelectionController,
            link: function(scope, element, attrs){
                scope.toggleSlide = function () {
                    var item_container = angular.element(element.children()[0]).find(".dropright-selection-item-container");
                    var options = angular.element(item_container.children()[0]);

                    if(item_container.hasClass('slide'))
                        $animate.removeClass(item_container, 'slide');
                    else
                        $animate.addClass(item_container, 'slide');
                };
            }
        };
    });
