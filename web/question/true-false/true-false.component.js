'use strict';

function trueFalseController($location){
    this.answer = function(result){
        result ? alert('Its true!!') : alert('Its false..');
        //time to save and continue to the next question
        $location.path("open");
    };
}

angular.module('question')
    .component("qtTrueFalse", {
        templateUrl: "question/true-false/true-false.template.html",
        controller: trueFalseController,
        bindings: {
            statament: "@"
        }
    });
