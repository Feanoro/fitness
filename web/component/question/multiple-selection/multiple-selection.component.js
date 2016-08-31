'use strict';

function multipleSelectionController($window, $element)
{
    var ctrl = this;

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.options});
    };

    ctrl.imgInlineSelectOption = function(option){
        option.answer = option.answer ? false : true;
    };

    var dialog = document.querySelector('dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    ctrl.showModal = function(){
        dialog.showModal();
    };

    //Dialog actions
    ctrl.close = function(){
        dialog.close();
    };
    ctrl.add = function(){
        ctrl.options.push({name: ctrl.other_name, answer: true});
        ctrl.close();
    };

    ctrl.$onInit = function()
    {
        if(angular.isUndefined(ctrl.config.optionsType))
            ctrl.optionsType = "checkbox";

        if(angular.isUndefined(ctrl.config.statementAlign))
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
            onQuestionAnswered: "&"
        }
    });