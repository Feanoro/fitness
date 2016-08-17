'use strict';

function indexController($location, random_background){
    var ctrl = this;
    //ctrl.data = "You are about to answer a whole bunch of questions. Are you ready?";
    ctrl.forward = function(){
        $location.path("close-question");
        //ctrl.toggleMenuVisibility({visible: false});
    };

    ctrl.$onInit = function(){
        ctrl.updateBackgroundColor({color: "mdl-color--red-400"});
        //ctrl.toggleMenuVisibility({visible: true});
    }
}

angular.module('site')
    .component("index", {
        templateUrl: "component/site/index/index.template.html",
        controller: indexController,
        bindings:{
            updateBackgroundColor: "&",
            toggleMenuVisibility: "&"
        }
    });

