'use strict';

function registerController() {
    var ctrl = this;
    ctrl.form_title = "Register";

    ctrl.$onInit = function(){
        //ctrl.updateBackgroundColor({color: ""});
    }
}

angular.module('user')
    .component("register", {
        templateUrl: "component/user/template/user.form.html",
        controller: registerController,
        bindings:{
            updateBackgroundColor: "&"
        }
    });