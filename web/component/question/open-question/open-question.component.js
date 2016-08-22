'use strict';

function openController(){
    var ctrl = this;

    var default_data = {
        statement: "How many hours of sleep you get per day?",
        label: "Type your ours",
        img_src: "",
        answer : ""
    };

    var textarea_data = {
        statement: "Please explain",
        label: "Write your answer here...",
        img_src: "",
        answer : ""
    };

    var img_left_data = {
        statement: "Neck",
        label: "Meassure",
        img_src: "http://localhost:8080/fitness/web/assets/img/Neck.jpg",
        answer : ""
    };

    ctrl.textfield_align = "mdl-cell--3-offset-desktop";

    ctrl.answerQuestion = function(){
        ctrl.onQuestionAnswered({data: ctrl.data.answer});
    };

    ctrl.data = default_data;

    ctrl.$onInit = function(){
        if(!ctrl.optionsType)
            ctrl.optionsType = "textfield";

        if(!ctrl.align)
            ctrl.align = "center";

        if(ctrl.align === "left")
            ctrl.textfield_align = "";

        if(ctrl.optionsType === "textarea")
        {
            ctrl.data = textarea_data;
        }
        else if(ctrl.optionsType === "img-left")
        {
            ctrl.data = img_left_data;
        }
    }
}

angular.module('question')
    .component("qtOpenQuestion", {
        templateUrl: "component/question/open-question/open-question.template.html",
        controller: openController,
        bindings: {
            optionsType: "@",
            align: "@",
            onQuestionAnswered: "&",
            config: "<"
        }
    });