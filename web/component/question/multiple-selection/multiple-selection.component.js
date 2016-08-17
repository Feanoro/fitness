'use strict';

function multipleSelectionController(random_background)
{
    var ctrl = this;

    var default_statement = "What components of fitness are you most interested in training?";
    var default_data = [
        {name: "Cardio. Train like a marathon runner.", value: 1},
        {name: "Strength. Train like a strongman/power lifter.", value: 2},
        {name: "Flexibility. Train like a yoga master.", value: 3},
        {name: "Aesthetics. Train like a body builder.", value: 4},
        {name: "Sports Specific Training. Train like a sports athelete.", value: 5},
        {name: "Injury Prevention. Train to conserve yourself.", value: 6}
    ];

    var img_block_statement = "Where would you be willing to train?";
    var img_block_data = [
        {name: "Park", value: 1, src: "http://localhost:8080/fitness/web/assets/img/park.jpg"},
        {name: "Home", value: 2, src: "http://localhost:8080/fitness/web/assets/img/home.jpg"},
        {name: "Gym", value: 3, src: "http://localhost:8080/fitness/web/assets/img/gym.jpg"}
    ];

    ctrl.$onInit = function(){
        ctrl.updateBackgroundColor({color: "mdl-color--" + random_background +"-400"});

        if(!ctrl.questionType)
            ctrl.questionType = "checkbox";

        if(!ctrl.statementAlign)
            ctrl.statementAlign = "center";

        if(ctrl.questionType === "checkbox"){
            ctrl.statement = default_statement;
            ctrl.answers = default_data;
        }
        else if(ctrl.questionType === "img-block"){
            ctrl.statement = img_block_statement;
            ctrl.answers = img_block_data;
        }
    }
}

angular.module('question')
    .component("qtMultipleSelection", {
        templateUrl: "component/question/multiple-selection/multiple-selection.template.html",
        controller: multipleSelectionController,
        bindings: {
            questionType: "@",
            updateBackgroundColor: "&",
            statementAlign: "@"
        }
    });