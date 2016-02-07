/**
 * Created by oleksandr on 05.02.16.
 */
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

// default task - run by gulp
gulp.task('default', ['scripts'], function() {

    // watch all files in directory js, and if some file was changed will call task scripts
    gulp.watch('js/**', function(event) {
        gulp.run('scripts');
    });
});