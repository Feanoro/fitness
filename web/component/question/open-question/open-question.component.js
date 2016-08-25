'use strict';

function openController($window){
    var ctrl = this;
    ctrl.is_array = false;
    ctrl.textfield_align = "mdl-cell--5-offset-desktop mdl-cell--2-offset-tablet";

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.answer});
    };

    ctrl.$onInit = function(){
        if(angular.isUndefined(ctrl.config.optionsType))
            ctrl.optionsType = "textfield";

        if(angular.isUndefined(ctrl.config.align))
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