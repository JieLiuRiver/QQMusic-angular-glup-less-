
(function(){
    'use strict';
    angular
        .module('app')
        .controller('IndexController', IndexControllerWork);
    IndexControllerWork.$inject = ['dataService', '$state', '$rootScope', '$http', '$scope', '$timeout',  '$interval'];

    function IndexControllerWork(dataService, $state, $rootScope, $http, $scope, $timeout, $interval) {
        var vm = this;
        /* 获取头部子菜单列表数据 */
        vm.subNavListData = dataService.getHeadSubListData();
        /* 获取头部上面到菜单列表数据 */
        vm.topNavListData = dataService.getTopNavListData();
        vm.hotkeyListData = dataService.getHotkeyListData();

        vm.toTop =  toTop;
        vm.isNeedTopBtn = false;
        function toTop(){
            $(window).scrollTop(0);
        }
        $(window).scroll(function(){
            var t = $(window).scrollTop();
            if (t > 100) {
                vm.isNeedTopBtn = true;
            } else {
                vm.isNeedTopBtn = false;
            }
        })
    }
})();