'use strict';

function closeQuestionController($window)
{
    var ctrl = this;

    var default_statement = "Do you lose your balance because of dizziness?";
    var default_data = [
        {name: "true", answer: false},
        {name: "false", answer: false},
        {name: "Nothing at all", answer: false}
    ];

    var radio_statement = "When do you feel sore?";
    var radio_data = [
        {name: "0 - 12 hours after I perform exercise.", answer: false},
        {name: "12 - 24 hours after I perform exercise.", answer: false},
        {name: "24 - 48 hours after I perform exercise.", answer: false},
        {name: "48 - 72 hours after I perform exercise.", answer: false},
        {name: "I rarely ever get sore.", answer: false},
        {name: "I’ve never felt sore in my entire life.", answer: false}
    ];

    ctrl.statement = default_statement;
    ctrl.options = default_data;
    ctrl.optioncopy = {};

    ctrl.answerQuestion = function(option)
    {
        if(!angular.equals(ctrl.optioncopy, option))
        {
            option.answer = true;
            ctrl.optioncopy.answer = false;
            ctrl.optioncopy = option;
        }
        //$window.alert(angular.toJson(ctrl.options));
        ctrl.onQuestionAnswered({data: ctrl.options});
    };

    ctrl.$onInit = function()
    {
        if(!ctrl.optionsType)
            ctrl.optionsType = "button";

        if(ctrl.optionsType === "radio")
        {
            ctrl.statement = radio_statement;
            ctrl.options = radio_data;
        }
    }
}

angular.module('question')
    .component("qtCloseQuestion", {
        templateUrl: "component/question/close-question/close-question.template.html",
        controller: closeQuestionController,
        bindings: {
            statement: "@",
            optionsType: "@",
            onQuestionAnswered: "&"
        }
    });
