"use strict";

function myDialogController(){

}
angular.module('fitnessApp')
    .directive('myDialog', function($window){
        return {
            restrict: 'E',
            templateUrl: 'directives/dialog/mydialog.template.html',
            controller: myDialogController,
            scope: {

            },
            link: function(scope, element, attrs){
                var dialog = document.querySelector('dialog');
                if (!dialog.showModal) {
                    dialogPolyfill.registerDialog(dialog);
                }

            }
        };
    });
