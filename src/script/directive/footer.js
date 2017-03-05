(function(){
    'use strict';
    angular
        .module('app')
        .directive('appFooter', FooterWork);
    FooterWork.$inject = [];
    function FooterWork() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/footer.html',
            scope: {

            },
            link: function(scope, element, attrs){

            }
        }
    }
})();
