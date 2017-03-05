(function(){
	'use strict';
	angular
		.module('app')
		.directive('appToplist', TopListWork);
	TopListWork.$inject = [];
	function TopListWork(){
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/toplist.html',
			scope:{
				toplist: '='
			},
			link: function(scope, element, attrs){
				console.log('toplist-scope', scope);

				/* 获取背景图位置 */
				scope.getbgposition = function(index){
					var disX = 0;
					switch (index) {
						case 0 :
						disX = 0
						break;
						case 1 : 
						disX = -300;
						break;
						case 2 : 
						disX = -600;
						break;
						case 3 :
						disX = - 900;
						break;
					}
					return {
						'background-position': ""+ disX +"px 0"
					}
				}

				/* hover事件 */
				scope.enterEvent = function(item){
					item.isHoving = true;
				}
				scope.leaveEvent = function(item){
					item.isHoving = false;
				}
			}
		}
	}
})();
