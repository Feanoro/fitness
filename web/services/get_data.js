'use strict';

angular.module('fitnessApp')
    .factory('getData', function($http){
        return function(url){
            return $http.get(url).
                then(function(response){
                    return response.data;
                });
        }
    });