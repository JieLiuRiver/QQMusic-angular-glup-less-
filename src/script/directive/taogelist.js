(function(){
    'use strict';
    angular
        .module('app')
        .directive('appTaogelist', TaogeListWork);
    TaogeListWork.$inject =  [];
    function TaogeListWork(){
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/taogelist.html',
            scope: {
                taogelist: '='
            },
            link: function(scope, element, attrs){
                console.log('taogelist', scope);
                setTimeout(function(){
                    scope.swiper2 = new Swiper ('.swiper2-hook', {
                        loop: true,
                        pagination: '.pagination2-hook'
                    })
                }, 100);

                /* 点击上一张 */
                scope.slide1Prev = function(){
                    scope.swiper2.slidePrev();
                }
                /* 点击下一张 */
                scope.slide1Next = function(){
                    scope.swiper2.slideNext();
                }
            }
        }
    }
})();