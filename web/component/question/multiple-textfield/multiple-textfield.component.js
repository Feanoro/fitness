'use strict';

function multipleTextfieldController(){
    var ctrl = this;

    ctrl.createObjInstances = function(){
        ctrl.answer = [];
        for(var i = 0; i < ctrl.count; i++)
            ctrl.answer.push({value: ""});
    };
    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.answer});
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
