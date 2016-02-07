var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('scripts', function() {
    return gulp.src(['js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('dest.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});
gulp.task('default', ['scripts'], function() {
});