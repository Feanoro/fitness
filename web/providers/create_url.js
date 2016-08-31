"use strict";

angular.module('fitnessApp')
    .factory('createUrl', function(host, app_path){
        return function(path){
            return host + app_path + path;
        }
    });
