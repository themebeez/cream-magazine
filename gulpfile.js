'use strict';
// include all necessary plugins in gulp file
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rtlcss = require('gulp-rtlcss');
//var cache = require('gulp-cache');
// Task defined for java scripts bundling and minifying
gulp.task('scripts', function() {
    return gulp.src([
            'assets/src/js/vendor/*.js',
            'assets/src/js/plugins/*.js',
            'assets/src/js/custom/*.js',
        ])
        .pipe(concat('bundle.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js/'));
});

// task to convert LTR css to RTL
gulp.task('dortl', function() {
    return gulp.src(['assets/dist/css/main.css'])
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
        .pipe(gulp.dest('assets/dist/css/')); // Output RTL stylesheets.
});

// declaring final task and command tasker
// just hit the command "gulp" it will run the following tasks...
gulp.task('default', gulp.series('scripts', 'dortl', (done) => {

    gulp.watch('assets/src/js/**/**.js', gulp.series('scripts'));
    gulp.watch('assets/dist/css/main.css', gulp.series('dortl'));

    done();
}));