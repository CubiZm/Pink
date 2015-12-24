"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var cmq = require('gulp-combine-media-queries');
var combineMq = require("gulp-combine-mq");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rimraf = require('rimraf');
var browserSync = require('browser-sync').create();

var scriptList = [
	'node_modules/picturefill/dist/picturefill.min.js',
	'node_modules/flickity/dist/flickity.pkgd.min.js',
	'node_modules/mustache/mustache.min.js',
	'source/js/script.js'
]

gulp.task("build",["style", "images", "script", "html"]);

gulp.task("style", function() {
	return gulp.src("source/sass/style.{sass,scss}")
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		})).on('error', sass.logError)
		.pipe(postcss([
			autoprefixer({browsers: "last 2 versions"})
		]))
		.pipe(combineMq({
			beautify: false
		}))
		.pipe(minifyCss())
		.pipe(rename({
				suffix: ".min"
		}))
		.pipe(gulp.dest("build/css"))
		.pipe(browserSync.stream());
});

gulp.task("images", function() {
	return gulp.src("source/img/*.{png,jpg,gif,svg}")
		.pipe(imagemin())
		.pipe(gulp.dest("build/img"));
});

gulp.task('script', function() {
	return gulp.src(scriptList)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./build/js/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./build/js'));
});

gulp.task("html", function() {
	return gulp.src("source/*.html")
		.pipe(gulp.dest("build"));
});


gulp.task('clean', function (cb) {
return rimraf('build', cb);
});

gulp.task("start", ["style"], function() {
	gulp.watch("source/sass/**/*.scss", ['style']);
		gulp.watch("source/*.html", ['html']);
		gulp.watch("js/*.js", ['js']);
		gulp.watch("./*.html")

	gulp.watch("sass/**/*.{sass,scss}", ["style"]);
});










// Static Server + watching scss/html files
gulp.task('serve', ['style'], function() {

		browserSync.init({
				server: "./build/",
				open: false
		});

		gulp.watch("source/sass/**/*.scss", ['style']);
		gulp.watch("source/*.html", ['html']);
		gulp.watch("js/*.js", ['js']);
		gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);



// Оставьте эту строку в самом конце файла
require("./.gosha");
