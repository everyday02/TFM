 var gulp = require('gulp');
 var jshint = require('gulp-jshint');//语法检查
 var concat = require('gulp-concat');//合并文件
 var uglify = require('gulp-uglify');//压缩代码
 var rename = require('gulp-rename');//重命名

 // CSS使用compass进行监听修改了。 在css目录执行：compass watch
 //var cssSass = require('gulp-sass');

 // 语法检查
 gulp.task('jshint', function () {
 return gulp.src('js/*.js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'));
 });

 // 合并文件之后压缩代码
 gulp.task('minify', function (){
 return gulp.src('js/**/*.js')
	 //.pipe(concat('bundler.js'))
	 .pipe(gulp.dest('dist/js'))
	 .pipe(uglify())
   .pipe(gulp.dest('dist/js'));
	// .pipe(rename('bundler.min.js'))

 });





 // 监视文件的变化
 gulp.task('watch', function () {
   gulp.watch(['js/*.js'], ['jshint', 'minify']);
 });

 // 注册缺省任务
 gulp.task('default', ['jshint', 'minify', 'watch']);

// gulp.task('default', ['jshint', 'minify']);
/**
var gulp = require('gulp'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css');

gulp.task('jsCode',function(){
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});


gulp.task('cssCode',function(){
  gulp.src('css/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'));
});
*/
