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
    ctrl.textfield_align = "mdl-cell--3-offset-desktop";

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.answer});
    };

    ctrl.statement = default_statement;

    ctrl.$onInit = function(){
        if(!ctrl.optionsType)
            ctrl.optionsType = "textfield";

        if(!ctrl.align)
            ctrl.align = "center";

        if(ctrl.align === "left")
            ctrl.textfield_align = "";

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
            align: "@",
            onQuestionAnswered: "&"
        }
    });