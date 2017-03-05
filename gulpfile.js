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

