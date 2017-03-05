(function(){
	'use strict';
	angular
		.module('app')
		.directive('appNewswiper', NewSwiperWork);
	NewSwiperWork.$inject = [];
	function NewSwiperWork() {
		return {
			restrict: 'A',
			// require: '^?appExcellent',  /* 接受共享对象 */
			replace: true,
			templateUrl: 'view/template/newswiper.html',
			scope: {
                listinner: '='
			},
			link: function(scope, element, attrs) {
				// console.log('new swiper', scope)
				
				/* 常量 */
				var GAP = 224, GAP2 = 448, SCALE = 0.81, ZINDEX1 = 0, ZINDEX2 = 11, ZINDEX3 = 12;
				 
				 _init();
				 
				 /* 监听来自父指令广播的事件 */
				 scope.$on('nextEvent', function(d){
				 	changeView('next');
				 	scope.$broadcast('paginationEvent')
				 })
				 scope.$on('prevEvent', function(d){
				 	changeView('prev');
				 })
				 
				/* 初始化 */ 
				function _init(){
					angular.forEach(scope.listinner, function(item,index){
						item.style = getStyle(index);
						item.classname = 'p' + (index + 1);
						var disX = (index - 1) * GAP;
						item.disX = disX;
					})
					// scope.swiperlistdata = angular.copy(scope.listinner);
					// console.log('jksdlfdj', scope.swiperlistdata)
				}
				/* 下一张 */
				function changeView(actionType){
					angular.forEach(scope.listinner, function(item, index){
						var newDisX;
						var scale = SCALE;
						var opacity = 1;
						var zIndex = (scope.listinner.length - index) + ZINDEX1;
						
						/* 下一张 */
						if (actionType == 'next') {
							if (item.disX == -GAP) {
								newDisX = (scope.listinner.length - 2) * GAP;
								item.disX = newDisX;
								opacity = 0;
							} else {
								newDisX = item.disX - GAP;
								item.disX = newDisX;
							}
						} 
						/* 上一张 */
						else if (actionType == 'prev') {
							if (item.disX == (scope.listinner.length - 2) * GAP) {
								newDisX = -GAP;
								item.disX = newDisX;
								opacity = 0;
							} else {
								newDisX = item.disX + GAP;
								item.disX = newDisX;
							}
						}
						
						if (newDisX == GAP) {
							scale = 1;
							zIndex = ZINDEX3;
						}
						item.style = {
							'transform': "translate3d("+ newDisX +"px, 0, 0) scaleY("+ scale +")",
							'z-index': zIndex,
							'opacity': opacity
						}
					})
				}
				/* 获取样式 */
				function getStyle(index){
					var value = (index - 1) * GAP;
					var scale = SCALE;
					var zIndex = (scope.listinner.length - index) + ZINDEX1;
					if (value == GAP) {
						scale = 1;
						zIndex = ZINDEX3;
					} 
					return {
						'transform': "translate3d("+ value +"px, 0, 0) scaleY("+ scale +")",
						'z-index': zIndex
					}
				}
		
			}
		}
	}
})();
