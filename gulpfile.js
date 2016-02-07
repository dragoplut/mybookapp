var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
gulp.task('scripts', function() {
    return gulp.src(['js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('dest.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});
gulp.task('vendor-scripts', function() {
    return gulp.src(['vendor/js/**/*.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build'))
});
gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});
gulp.task('vendor-styles', function(){
    gulp.src('vendor/css/**/*.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./css/'))
});
gulp.task('default', ['scripts', 'vendor-scripts', 'styles', 'vendor-styles'], function() {
});