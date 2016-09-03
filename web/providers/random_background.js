'use strict';

/*function randomBackground(background_colors)
{
    var size = background_colors.length - 1;
    var random_index = Math.floor((Math.random() * size));

    this.background = background_colors[random_index];
}*/

angular.module('fitnessApp')
    //.service('random_background', ['background_colors', randomBackground]); //Return an Object
    .factory('random_background', ['background_colors', 'color_intensity', function(bgc, ci){
        var size = bgc.length - 1;
        var random_index = Math.floor((Math.random() * size));
        return bgc[random_index];
        //return "mdl-color--" + bgc[random_index] + "-" + ci;
    }]);
