'use strict';

function multipleTextfieldController(){
    var ctrl = this;

    ctrl.count = 1;
    ctrl.getCount = function(){

    };
    ctrl.validateCount = function(){

    };
}

angular.module('question')
    .component('qtMultipleTextfield', {
        templateUrl: "component/question/multiple-textfield/multiple-textfield.template.html",
        controller: multipleTextfieldController,
        bindings: {
            statement: "<",
            answer: "=",
            config: "<",
            onQuestionAnswered: "&"
        }
    });
