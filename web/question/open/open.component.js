'use strict';

function openController($location){
    this.answer = function(result){
        //result ? alert('Its true!!') : alert('Its false..');
        //time to save and continue to the next question
        //$location.path('open');
    };
}

angular.module('question')
    .component("qtOpen", {
        templateUrl: "question/open/open.template.html",
        controller: openController,
        bindings: {
            statament: "@"
        }
    });