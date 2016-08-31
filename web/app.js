'use strict';

// Define the `` module
angular.module('fitnessApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'layout',
    'site',
    'user',
    'question'
]);

angular.module('fitnessApp').run(function($interval){
    var mdlUpgradeDom = false;
    $interval(function() {
        if (mdlUpgradeDom) {
            componentHandler.upgradeDom();
            mdlUpgradeDom = false;
        }
    }, 200);

    var observer = new MutationObserver(function () {
        mdlUpgradeDom = true;
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    /* support <= IE 10
     angular.element(document).bind('DOMNodeInserted', function(e) {
     mdlUpgradeDom = true;
     });
     */
});