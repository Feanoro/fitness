'use strict';

function closeQuestionController()
{
    var ctrl = this;

    ctrl.optioncopy = {};

    ctrl.answerQuestion = function(option)
    {
        if(!angular.equals(ctrl.optioncopy, option))
        {
            option.answer = true;
            ctrl.optioncopy.answer = false;
            ctrl.optioncopy = option;
        }
        ctrl.onQuestionAnswered({data: ctrl.options});
    };

    ctrl.$onInit = function()
    {
        if(!ctrl.optionsType)
            ctrl.optionsType = "button";
    }
}

angular.module('question')
    .component("qtCloseQuestion", {
        templateUrl: "component/question/close-question/close-question.template.html",
        controller: closeQuestionController,
        bindings: {
            statement: "<",
            options: "=",
            config: "<",
            optionsType: "@",
            onQuestionAnswered: "&"
        }
    });
