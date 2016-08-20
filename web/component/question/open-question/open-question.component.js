'use strict';

function openController(){
    var ctrl = this;

    var default_statement = "How many hours of sleep you get per day?";
    var default_data = [
        {name: "true", answer: false},
        {name: "false", answer: false},
        {name: "Nothing at all", answer: false}
    ];

    var textarea_statement = "Please explain";

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.answer});
    };

    ctrl.statement = default_statement;

    ctrl.$onInit = function(){
        if(!ctrl.optionsType)
            ctrl.optionsType = "textfield";

        if(ctrl.optionsType === "textarea")
            ctrl.statement = textarea_statement;
    }
}

angular.module('question')
    .component("qtOpenQuestion", {
        templateUrl: "component/question/open-question/open-question.template.html",
        controller: openController,
        bindings: {
            optionsType: "@",
            onQuestionAnswered: "&"
        }
    });