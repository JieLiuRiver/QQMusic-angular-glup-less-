(function(){
    'use strict';
    angular
        .module('app', ['ui.router'])
        .run(runWork)
        .config(configWork);

        runWork.$inject = ['$rootScope', '$state', '$stateParams'];
        configWork.$inject = ['$stateProvider', '$urlRouterProvider'];

        function runWork($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }

        function configWork($stateProvider, $urlRouterProvider){
            /*默认路由*/
            $urlRouterProvider.otherwise('/index/main');
            $stateProvider
                .state('index',{
                    url : "/index",
                    views : {
                        'index' : {
                            templateUrl : "view/index.html",
                            controller : "IndexController",
                            controllerAs : "vm"
                        }
                    }
                })
                .state("index.main",{
                    url : "/main",
                    views : {
                        'main@index' : {
                             templateUrl : "view/main.html",
                             controller : "MainController",
                             controllerAs : "vm"
                        }
                    }
                })
                .state('index.singer',{
                    url : "/singer",
                    views : {
                        'main@index' : {
                            templateUrl : "view/singer.html",
                            controller : "SingerController",
                            controllerAs : "vm"
                        }
                    }
                })
                .state('index.album',{
                    url : "/album",
                    views : {
                        'main@index' : {
                            template : "<div style='height:800px;background: url(https://y.gtimg.cn/mediastyle/yqq/img/loading.gif) 50% no-repeat;' class='f-ib f-w'>正在开发专辑页面...</div>",
                            controller : function(){

                            }
                        }
                    }
                })
                .state('index.toplist',{
                    url : "/toplist",
                    views : {
                        'main@index' : {
                            template : "<div style='height:800px;background: url(https://y.gtimg.cn/mediastyle/yqq/img/loading.gif) 50% no-repeat;' class='f-w f-ib'>正在开发排行榜页面...</div>",
                            controller : function(){

                            }
                        }
                    }
                })
                .state('index.cate',{
                    url : "/cate",
                    views : {
                        'main@index' : {
                            template : "<div style='height:800px;background: url(https://y.gtimg.cn/mediastyle/yqq/img/loading.gif) 50% no-repeat;' class='f-ib f-w'>正在开发分类歌单页面...</div>",
                            controller : function(){

                            }
                        }
                    }
                })
                .state('index.mv',{
                    url : "/mv",
                    views : {
                        'main@index' : {
                            template : "<div style='height:800px;background: url(https://y.gtimg.cn/mediastyle/yqq/img/loading.gif) 50% no-repeat;' class='f-w f-ib'>正在开发MV页面...</div>",
                            controller : function(){

                            }
                        }
                    }
                });
        }

})();