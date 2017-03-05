(function(){
    'use strict';
    angular
        .module('app')
        .directive('appSwiperarea', SwiperareaWork);
    SwiperareaWork.$inject = [];
    function SwiperareaWork() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/swiper-area.html',
            scope: {
                innertabdata: '=',
                slidelist: '='
            },
            link: function(scope, element, attr){
                setTimeout(function(){
                    console.log('swiper-area', scope)
                    scope.swiper1 = new Swiper ('.swiper1-hook', {
	                    loop: true,
	                    pagination: '.pagination1-hook'
	                })
                }, 200)

                /* 默认隐藏 */
                scope.isNeedSlideBtn = false;
                /* mouseenter事件 */
                scope.enterEvent = function() {
                    scope.isNeedSlideBtn = true;
                }
                /* mouseleave事件 */
                scope.leaveEvent = function() {
                    scope.isNeedSlideBtn = false; 
                }
                
                /* 点击上一张 */
               scope.slide1Prev = function(){
               	 scope.swiper1.slidePrev();
               }
               /* 点击下一张 */
              scope.slide1Next = function(){
              	scope.swiper1.slideNext();
              }
                
            }
        }
    }
})();