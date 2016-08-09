'use strict';

function registerController()
{
    this.data = "Hello world!";
}

angular.module('user')
    .component("register", {
        templateUrl: "user/register/register.template.html",
        controller: registerController
    });