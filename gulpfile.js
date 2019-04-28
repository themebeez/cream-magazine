'use strict';


// include all necessary plugins in gulp file

var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var rename = require('gulp-rename');

var cache = require('gulp-cache');

var rtlcss = require('gulp-rtlcss');

var autoprefixer = require('gulp-autoprefixer');





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


// do rlt

gulp.task('do-rlt', function () {

    return gulp.src(['assets/dist/css/main.css'])

        .pipe(autoprefixer(["last 2 versions", "> 1%"])) // Other post-processing.
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
        .pipe(gulp.dest('assets/dist/css/')); // Output RTL stylesheets.
});


// Task watch

gulp.task('watch', function() {

    // Watch .js files

    gulp.watch('assets/src/js/**/**.js', ['scripts']);

    gulp.watch('assets/dist/css/main.css', ['do-rlt']);


});


// declaring final task and command tasker

// just hit the command "gulp" it will run the following tasks...


gulp.task('default', ['watch', 'scripts', 'do-rlt']);