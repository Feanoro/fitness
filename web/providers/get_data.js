'use strict';

angular.module('fitnessApp')
    .factory('getData', function($http, createUrl){
        return function(path){
            return $http.get(createUrl(path)).
                then(function(response){
                    return response.data;
                });
        }
    });