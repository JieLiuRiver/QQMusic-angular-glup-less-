(function(){
    'use strict';
    angular
        .module('app')
        .directive('appFirstlaunch', FirstlaunchWork);
    FirstlaunchWork.$inject = [];
    function FirstlaunchWork() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/firstlaunch.html',
            scope: {
                innertabdata: '='
            },
            link: function(scope, element, attrs){

            }
        }
    }
})();
