
(function(){
    'use strict';
    angular
        .module('app')
        .directive('appHead', HeadWork);
    HeadWork.$inject = [];
    function HeadWork() {
        return{
            restrict: 'A',
            replace: true,
            templateUrl: 'view/template/head.html',
            scope: {
                test1: '@',
                sublist: '=',
                toplist: '=',
                hotkeylist: '='
            },
            link: function(scope, element, attr){
                console.log('指令共享数据', scope)

                /* 搜索框获取光标事件 */
                scope.searchInputFocusEvent = function(){
                    scope.isNeedSmartBox = true;
                };
                /* 搜索框失去光标事件 */
                scope.searchInputBlurEvent = function(){
                    scope.isNeedSmartBox = false;
                }

                scope.changeStatus = function(item){
                    angular.forEach(scope.sublist, function(item, index){
                       item.isActive = false;
                    });
                    item.isActive = true;
                }

                /* 刷新页面，保持路由跟当前菜单高亮是对应的 */
                checkRouteStatus();

                function checkRouteStatus(){
                    var routename = scope.$root.$state.current.name;
                    angular.forEach(scope.sublist, function(item, index){
                        item.isActive = false;
                    });
                    switch (routename) {
                        case 'index.main':
                            scope.sublist[0]['isActive'] = true;
                            break;
                        case 'index.singer':
                            scope.sublist[1]['isActive'] = true;
                            break;
                        case 'index.album':
                            scope.sublist[2]['isActive'] = true;
                            break;
                        case 'index.toplist':
                            scope.sublist[3]['isActive'] = true;
                            break;
                        case 'index.cate':
                            scope.sublist[4]['isActive'] = true;
                            break;
                        case 'index.mv':
                            scope.sublist[5]['isActive'] = true;
                            break;
                    }
                }
            }
        }
    }
})();

