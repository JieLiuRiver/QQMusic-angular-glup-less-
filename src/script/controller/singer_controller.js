(function(){
    'use strict';
    angular
        .module('app')
        .controller('SingerController', SingerController);
    SingerController.$inject = ['dataService', '$state', '$rootScope', '$http', '$scope', '$timeout',  '$interval'];

    function SingerController(dataService, $state, $rootScope, $http, $scope, $timeout, $interval) {
        var vm = this;
        console.log('singer')
        /* 获取头部子菜单列表数据 */
        vm.subNavListData = dataService.getHeadSubListData();
        /* 获取头部上面到菜单列表数据 */
        vm.topNavListData = dataService.getTopNavListData();
        vm.hotkeyListData = dataService.getHotkeyListData();
    }
})();