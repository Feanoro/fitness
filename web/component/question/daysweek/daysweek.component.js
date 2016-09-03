'use strict';

function qtDaysweekController($window)
{
    var ctrl = this;

    var dialog = document.querySelector('dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    ctrl.showModal = function(obj){
        ctrl.aux = obj;
        dialog.showModal();
    };

    //Dialog actions
    ctrl.close = function(){
        dialog.close();
    };

    ctrl.add = function(){
        ctrl.aux.value.push({activity: ctrl.activity});
        ctrl.activity = '';
        ctrl.close();
    };

    ctrl.deleteActivity = function (i, j) {
        ctrl.answer[i].value.splice(j, 1);
    };
}

angular.module('question')
    .component('qtDaysweek',{
        controller: qtDaysweekController,
        templateUrl: 'component/question/daysweek/daysweek.template.html',
        bindings:{
            statement: '<',
            answer: '=',
            config: "<",
            onQuestionAnswered: "&"
        }
    });