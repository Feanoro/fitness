'use strict';

angular.module('fitnessApp')
    .directive('boxCheckbox', function(){
        return {
            link: function (scope, element, attrs) {
                element.on('click', function(e){
                    element.toggleClass('selected');
                });
            }
        };
    });
