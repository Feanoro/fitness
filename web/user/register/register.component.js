'use strict';

function registerController() {
    this.form_title = "Register";
}

angular.module('user')
    .component("register", {
        templateUrl: "user/template/user.form.html",
        controller: registerController
    });