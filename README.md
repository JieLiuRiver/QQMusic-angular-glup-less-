## Angular + bower + gulp 实现仿QQ音乐PC网页版

### 安装bower
    npm i -g bower
    
### .bowerrc
    {
        "directroy": "lib"
    }
    
### 目录结构    
    --qqmusic
        --src/   // 源码
            --data/
            --image/
            --script/
                --config
                --controller
                --directive
                --filter
                --service
                app.js
            --style
            --view
               --template
               login.html
               main.html
            404.html
            index.html
        --build/    // 构建src目录下的代码放到build下
        --dist/     // 产品发布目录
        --test/     
  
### gulp 构建工具
    1. 优点，基于流， 可读性好
    
    2. 常用： 
        1. src    // 读取文件
        2. dest   // 生成文件
        3. watch   // 监控文件
        4. task    // 定制任务
        5. pipe    // 流的操作
    
    3. 安装
       全局安装： npm i -g gulp
       npm init 生成 package.json
       当前目录安装： 
            npm i --save-dev gulp
       安装插件：
            npm i --save-dev gulp-clean gulp-concat gulp-connect gulp-cssmin gulp-imagemin gulp-less gulp-load-plugins gulp-uglify open
            
    4. 写配置文件
          创建gulpfile.js
           var gulp = require('gulp');
           
           /* 用$符号来引用 */
           var $ = require('gulp-load-plugins');
           
           var open = require('open');
           
           /* 定义目录路径 */
           var app = {
               srcPath: 'src/',   // 源码
               devPath: 'build/',   // 开发
               prdPath: 'dist/'    //生产
           };
           
           
           /* 定制一个lib任务 */
           gulp.task('lib', function(){
               // 读取所有文件
               gulp.src('bower_components/**/*.js')
               // 拷贝到开发
                   .pipe(gulp.dest(app.devPath + 'vendor'))
                   .pipe(gulp.dest(app.prdPath + 'vendor'))
           });
           
           执行任务：
                gulp lib
           会生成,并且把js拷贝到指定到文件
                build/
                dist/
           ...     
           
           
###  gulpfiles文件
    
```
var gulp = require('gulp');

/* 用$符号来引用 */
var $ = require('gulp-load-plugins')();

var open = require('open');

/* 定义目录路径 */
var app = {
    srcPath: 'src/',   // 源码
    devPath: 'build/',   // 开发
    prdPath: 'dist/'    //生产
};


/* 定制一个lib任务 */
gulp.task('lib', function(){
    // 读取所有文件
    gulp.src('lib/**/*.js')
    // 拷贝到开发
        .pipe(gulp.dest(app.devPath + 'vendor'))
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload());
});

gulp.task('html', function(){
   gulp.src(app.srcPath + '**/*.html')
       .pipe(gulp.dest(app.devPath))
       .pipe(gulp.dest(app.prdPath));
});

/* 假数据拷贝过去 */
gulp.task('json', function() {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload());
});


gulp.task('less', function(){
   gulp.src(app.srcPath + 'style/**/*.less')
       .pipe($.less())
       .pipe(gulp.dest(app.devPath + 'css'))
       .pipe($.cssmin())
       .pipe(gulp.dest(app.prdPath + 'css'))
       .pipe($.connect.reload());
});

gulp.task('css', function(){
    gulp.src(app.srcPath + 'style/**/*.css')
        .pipe(gulp.dest(app.devPath + 'css'))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload());
});


gulp.task('js', function(){
   gulp.src(app.srcPath + 'script/**/*.js')
       .pipe($.concat('app.js'))
       .pipe(gulp.dest(app.devPath + 'js'))
       .pipe($.uglify())
       .pipe(gulp.dest(app.prdPath + 'js'))
       .pipe($.connect.reload());
});

gulp.task('image', function(){
   gulp.src(app.srcPath + 'image/**/*')
       .pipe(gulp.dest(app.devPath + 'image'))
       .pipe($.imagemin())
       .pipe(gulp.dest(app.prdPath + 'image'))
       .pipe($.connect.reload());
});


/* 每次构建，进行一次清除动作 */
gulp.task('clean', function(){
    gulp.src([app.devPath,
        app.prdPath])
        .pipe($.clean())
});


gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json', 'css']);

/* 构建后启动一个服务器, 访问开发目录文件 */
gulp.task('serve', ['build'], function(){
    $.connect.server({
        root: [app.devPath],
        livereload: true,
        port: 8080
    });
    open('http://localhost:8080');

    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'image/**/*.json', ['image']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
});

gulp.task('default', ['serve']);


```

### index.html
    
```
<!DOCTYPE html>
<html lang="zh-cn" ng-app="app">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="zh-cn">
    <meta name="keywords" content="音乐,QQ音乐,在线听歌,音乐下载,音乐播放器,音乐网站,MV,巅峰榜,音乐排行榜,翻译歌曲,热门歌曲,经典老歌">
    <meta name="description" content="QQ音乐是腾讯公司推出的一款免费音乐服务，海量音乐在线试听、最流行音乐在线首发、歌词翻译、手机铃声下载、高品质音乐试听、正版音乐下载、免费空间背景音乐设置、MV观看等，是互联网音乐播放和下载的首选">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/swiper.min.css">

    <title>QQ音乐 - 中国最新最全免费正版高品质音乐平台！</title>
</head>
<body>
    <div ui-view="index">

    </div>
    <script src="vendor/jquery/dist/jquery.js"></script>
    <script src="vendor/swiper/dist/js/swiper.js"></script>
    <script src="vendor/angular/angular.js" charset="utf-8"></script>
    <script src="vendor/angular-ui-router/release/angular-ui-router.js" charset="utf-8"></script>
    <script src="js/app.js" charset="utf-8"></script>
</body>
</html>
```


### app.js

```
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
                .state('index',{    /* 公用区域 *／
                    url : "/index",
                    views : {
                        'index' : {
                            templateUrl : "view/index.html",
                            controller : "IndexController",
                            controllerAs : "vm"
                        }
                    }
                })
                /* 路由嵌套的写法如下 */
                .state("index.main",{   /* 主页面 */
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
                ...
        }

})();
```

### maincontroller.js

```
(function(){
    'use strict';
    angular
        .module('app')
        .controller('MainController', MainControllerWork);
    MainControllerWork.$inject = ['dataService', '$state', '$rootScope', '$http', '$scope', '$timeout',  '$interval'];

    /* 获取数据 */
    function MainControllerWork(dataService, $state, $rootScope, $http, $scope, $timeout, $interval) {
        var vm = this;
        /* 获取头部子菜单列表数据 */
        vm.subNavListData = dataService.getHeadSubListData();
        /* 获取头部上面到菜单列表数据 */
        vm.topNavListData = dataService.getTopNavListData();
        vm.hotkeyListData = dataService.getHotkeyListData();
        vm.innertabListData = dataService.getInnertabListData();
        vm.slideListData = dataService.getSlideListData();
        vm.newswiperdata = dataService.getNewSwiperdata();
        vm.toplistdata = dataService.getToplistdata();
        vm.taogelistdata = dataService.getTaogelistdata();
        vm.firstlaunchdata = dataService.getFirstlaunchdata();
    }
})();
```

### 属性指令创建以及管理


创建

```
(function(){
	'use strict';
	angular
		.module('app')
		.directive('appExcellent', ExcellentWork);
	ExcellentWork.$inject = [];
	function ExcellentWork(){
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'view/template/excellent.html',
			scope: {
				newswiperlist: '='
			},
			/* 暴露对象，共享, 供其他指令享用 */
			controller: function($scope){
			     this.newswiperlist = $scope.newswiperlist;
			},
			link: function(scope, element, attrs){
				 console.log('excellent-scope', scope);
				// some code...
			}
		}
	}
})(); /* 这里分号如果没有写，编译压缩后会报错 */

```

```
(function(){
    'use strict';
    angular
        .module('app')
        .directive('appTaogelist', TaogeListWork);
    TaogeListWork.$inject =  [];
    function TaogeListWork(){
        return {
            restrict: 'A',
            require:'^?appExcellent', // 接受appExcellent指令暴露的控制器
            replace: true,
            templateUrl: 'view/template/taogelist.html',
            scope: {
                taogelist: '='
            },
            link: function(scope, element, attrs, ExcelCtrl){
                console.log('taogelist', scope);
                console.log('ExcelCtrl', ExcelCtrl);
            }
        }
    }
})();
```



使用
```
<div app-swiperarea
	 innertabdata="vm.innertabListData"
	 slidelist = "vm.slideListData">
</div>
<div app-excellent
	 newswiperlist="vm.newswiperdata">
</div>
<section
		app-toplist
		toplist="vm.toplistdata">
</section>
<section
		app-taogelist
		taogelist="vm.taogelistdata">

</section>
<section
		app-firstlaunch
		innertabdata="vm.firstlaunchdata">
</section>
```

