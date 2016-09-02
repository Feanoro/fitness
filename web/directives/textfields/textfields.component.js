"use strict";

function textfieldsController(scope){

}
angular.module('fitnessApp')
    .directive('textfields', function(){
        return {
            scope: {
                total: '<'
            },
            controller: textfieldsController,
            templateUrl: 'directives/textfields/textfields.template.html',
            link: function(scope,element,attrs){

            }
        };
    });
