'use strict';

function openController(){
    var ctrl = this;

    ctrl.textfield_align = "mdl-cell--3-offset-desktop";

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.answer});
    };

    ctrl.$onInit = function(){
        if(!ctrl.config.optionsType)
            ctrl.optionsType = "textfield";

        if(!ctrl.config.align)
            ctrl.config.align = "center";

        if(ctrl.config.align === "left")
            ctrl.textfield_align = "";
    }
}

angular.module('question')
    .component("qtOpenQuestion", {
        templateUrl: "component/question/open-question/open-question.template.html",
        controller: openController,
        bindings: {
            align: "@",
            statement: "<",
            answer: "=",
            config: "<",
            optionsType: "@",
            onQuestionAnswered: "&"           
        }
    });