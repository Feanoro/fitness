'use strict';

function closeQuestionController($location){
    //Default answers
    this.answers = [
        {name: "true", value: true},
        {name: "false", value: false}
    ];
    //this.answers = [{name:"Hola1", value:3 }, {name:"Hola1", value:3 }, {name:"Hola1", value:3 }];
    
    this.getAnswer = function(result){
        alert(result);
        //time to save and continue to the next question
        $location.path("open");
    };
}

angular.module('question')
    .component("qtCloseQuestion", {
        templateUrl: "question/close-question/close-question.template.html",
        controller: closeQuestionController,
        bindings: {
            statament: "@",
            answers: "@"
        }
    });
