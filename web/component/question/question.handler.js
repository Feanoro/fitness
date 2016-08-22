'use strict';

function questionHandlerController($window)
{
    var ctrl = this;

    ctrl.saveAnswer = function(data){
        $window.alert(angular.toJson(data));
    };
}

angular.module('question')
    .component('questionHandler',{
        controller: questionHandlerController,
        templateUrl: 'component/question/question.handler.template.html',
        bindings: {
            type: "@",
            data: "<"
        }
    });