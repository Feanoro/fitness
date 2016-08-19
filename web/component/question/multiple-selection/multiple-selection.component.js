'use strict';

function multipleSelectionController($window)
{
    var ctrl = this;

    var default_statement = "What components of fitness are you most interested in training?";
    var default_data = [
        {name: "Cardio. Train like a marathon runner.", answer: false},
        {name: "Strength. Train like a strongman/power lifter.", answer: false},
        {name: "Flexibility. Train like a yoga master.", answer: false},
        {name: "Aesthetics. Train like a body builder.", answer: false},
        {name: "Sports Specific Training. Train like a sports athelete.", answer: false},
        {name: "Injury Prevention. Train to conserve yourself.", answer: false}
    ];

    var img_block_statement = "Where would you be willing to train?";
    var img_block_data = [
        {name: "Park", img_src: "http://localhost:8080/fitness/web/assets/img/park.jpg", answer: false},
        {name: "Home", img_src: "http://localhost:8080/fitness/web/assets/img/home.jpg", answer: false},
        {name: "Gym", img_src: "http://localhost:8080/fitness/web/assets/img/gym.jpg", answer: false}
    ];

    ctrl.statement = default_statement;
    ctrl.options = default_data;

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.options});
    };

    ctrl.$onInit = function()
    {
        if(!ctrl.optionsType)
            ctrl.optionsType = "checkbox";

        if(!ctrl.statementAlign)
            ctrl.statementAlign = "center";

        if(ctrl.optionsType === "img-block")
        {
            ctrl.statement = img_block_statement;
            ctrl.options = img_block_data;
        }
    }
}

angular.module('question')
    .component("qtMultipleSelection", {
        templateUrl: "component/question/multiple-selection/multiple-selection.template.html",
        controller: multipleSelectionController,
        bindings: {
            statementAlign: "@",
            optionsType: "@",
            onQuestionAnswered: "&"
        }
    });