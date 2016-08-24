'use strict';

function openController($window){
    var ctrl = this;
    ctrl.is_array = false;
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

        if(angular.isArray(ctrl.answer))
            ctrl.is_array = true;
    };
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