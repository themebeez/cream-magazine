'use strict';


// include all necessary plugins in gulp file

var gulp = require('gulp');

// var concat = require('gulp-concat');

// var uglify = require('gulp-uglify');

// var rename = require('gulp-rename');

// var cache = require('gulp-cache');

// var wpPot = require( 'gulp-wp-pot' );


// SCSS Compiler

var sass = require('gulp-sass');

sass.compiler = require('node-sass');


// CSS properties auto vendor prefixer

var autoprefixer = require( 'gulp-autoprefixer' );


// Constanly watch changes

var watch = require('gulp-watch');


// Task defined for java scripts bundling and minifying

// gulp.task( 'scripts', function() {


//     return gulp.src([

//             'assets/src/js/jquery/*.js',
//             'assets/src/js/vendor/*.js',
//             'assets/src/js/libraries/*.js',
//             'assets/src/js/custom/*.js',
//         ])

//         .pipe(concat('bundle.js'))

//         .pipe(rename({ suffix: '.min' }))

//         .pipe(uglify())

//         .pipe(gulp.dest('assets/dist/js/'));


// } );



// gulp.task( 'makepot', function () {

//     return gulp.src( ['**/*.php', '!node_modules/**'] )
//         .pipe( wpPot( {
//             package: 'cream-magazine'
//         } ) )
//         .pipe( gulp.dest( 'languages/cream-magazine.pot' ) );
// } );


// Task watch

// gulp.task( 'watch', function() {

//     gulp.watch( 'assets/src/js/**/**.js', ['scripts'] );


// } );

gulp.task( 'sass', function () {

  	return gulp.src( 'assets/src/scss/main.scss' )
  		.pipe( sass().on( 'error', sass.logError ) )
  		.pipe( autoprefixer() )
  		.pipe( gulp.dest( 'assets/dist/css/' ) );
});

gulp.task( 'stream', function () {

  	gulp.watch( 'assets/src/scss/**/*.scss', gulp.series('sass') );

});

// gulp.watch(	'assets/src/scss/**/*.scss', ['sass']	);


// declaring final task and command tasker

// just hit the command "gulp" it will run the following tasks...


// gulp.task( 'default', gulp.series( 'makepot' ) );

// gulp.task( 'default', gulp.series( 'stream' ) );