'use strict';

function multipleSelectionController($window)
{
    var ctrl = this;

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.options});
    };

    ctrl.$onInit = function()
    {
        if(!ctrl.optionsType)
            ctrl.optionsType = "checkbox";

        if(!ctrl.config.statementAlign)
            ctrl.config.statementAlign = "center";
    }
}

angular.module('question')
    .component("qtMultipleSelection", {
        templateUrl: "component/question/multiple-selection/multiple-selection.template.html",
        controller: multipleSelectionController,
        bindings: {
            statement: "<",
            options: "=",
            config: "<",
            optionsType: "@",
            onQuestionAnswered: "&"
        }
    });