'use strict';

function closeQuestionController($location, random_background)
{
    var ctrl = this;

    var default_statement = "Do you lose your balance because of dizziness?";
    var default_data = [
        {name: "true", value: true},
        {name: "false", value: false},
        {name: "Nothing at all", value: 0}
    ];
    //this.answers = [{name:"Hola1", value:3 }, {name:"Hola1", value:3 }, {name:"Hola1", value:3 }];

    var radio_statement = "When do you feel sore?";
    var radio_data = [
        {name: "0 - 12 hours after I perform exercise.", value: 1},
        {name: "12 - 24 hours after I perform exercise.", value: 2},
        {name: "24 - 48 hours after I perform exercise.", value: 3},
        {name: "48 - 72 hours after I perform exercise.", value: 4},
        {name: "I rarely ever get sore.", value: 5},
        {name: "I’ve never felt sore in my entire life.", value: 6}
    ];

    ctrl.getAnswer = function(result){
        //time to save and continue to the next question
        //$location.path("open");
    };

    ctrl.$onInit = function(){
        ctrl.updateBackgroundColor({color: "mdl-color--" + random_background +"-400"});
        if(!ctrl.questionType){
            ctrl.questionType = "button";
        }

        if(ctrl.questionType === "radio")
        {
            ctrl.statement = radio_statement;
            ctrl.answers = radio_data;
        }
        else
        {
            ctrl.statement = default_statement;
            ctrl.answers = default_data;
        }

    }
}

angular.module('question')
    .component("qtCloseQuestion", {
        templateUrl: "component/question/close-question/close-question.template.html",
        controller: closeQuestionController,
        bindings: {
            statement: "@",
            answers: "@",
            questionType: "@",
            updateBackgroundColor: "&"
        }
    });
