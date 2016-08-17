'use strict';

function openController($location, random_background){
    var ctrl = this;
    var default_statement = "How many hours of sleep you get per day?";

    ctrl.answer = function(result){
        //result ? alert('Its true!!') : alert('Its false..');
        //time to save and continue to the next question
        $location.path('open');
    };

    ctrl.$onInit = function(){
        ctrl.updateBackgroundColor({color: "mdl-color--" + random_background +"-400"});
        ctrl.statement = default_statement;
    }
}

angular.module('question')
    .component("qtOpen", {
        templateUrl: "component/question/open/open.template.html",
        controller: openController,
        bindings: {
            statement: "@",
            updateBackgroundColor: "&"
        }
    });