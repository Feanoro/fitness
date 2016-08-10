'use strict';

function indexController($location){
    var ctrl = this;
    //ctrl.data = "You are about to answer a whole bunch of questions. Are you ready?";
    ctrl.forward = function(){
        $location.path("true-false");
    };
}

angular.module('site')
    .component("index", {
        templateUrl: "site/index.template.html",
        controller: indexController
    });

