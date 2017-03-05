## Angular + bower + gulp 实现仿QQ音乐PC网页版

### 安装bower
    npm i -g bower
    
### .bowerrc
    {
        "directroy": "lib"
    }
    
### 目录结构    
    --angular-QQMusic_PC
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
          ```
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
           
           ```
           执行任务：
                gulp lib
           会生成,并且把js拷贝到指定到文件
                build/
                dist/
           ...     