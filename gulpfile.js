var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var newer = require('gulp-newer');
var debug = require('gulp-debug');

gulp.task('scripts', function() {
    return gulp.src(['frontend/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('dest.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
});

gulp.task('styles', function(){
    gulp.src('frontend/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('vendor-styles', function(){
    gulp.src('frontend/**/*.css')
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('public/vendor/css/'))
});

gulp.task('public', function(){
    return gulp.src(['frontend/**', '!frontend/js/**', '!frontend/sass/**', '!frontend/sass', '!frontend/vendor/css/**'])
        .pipe(newer('public'))
        .pipe(debug({title:'public:copy'}))
        .pipe(gulp.dest('public'))
});

gulp.task('watch', function(){
    gulp.watch('frontend/js/**/*.js', ['scripts']);
    gulp.watch('frontend/sass/**/*.*', ['styles']);
    gulp.watch('frontend/index.html', ['public']);
});

gulp.task('default', ['scripts', 'styles', 'vendor-styles', 'public']);