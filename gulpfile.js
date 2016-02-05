/**
 * Created by oleksandr on 05.02.16.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

gulp.task('scripts', function() {
    gulp.src(['src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('build'))
        .pipe(refresh(server))
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('default', function() {
    gulp.run('lr-server', 'scripts');

    gulp.watch('src/**', function(event) {
        gulp.run('scripts');
    });
});