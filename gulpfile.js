"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require('browser-sync').create();

gulp.task("style", function() {
	return gulp.src("sass/style.{sass,scss}")
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		})).on('error', sass.logError)
		.pipe(postcss([
			autoprefixer({browsers: "last 2 versions"})
		]))
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
});

gulp.task("start", ["style"], function() {
	gulp.watch("sass/**/*.{sass,scss}", ["style"]);
});

// Static Server + watching scss/html files
gulp.task('serve', ['style'], function() {

		browserSync.init({
				server: "./",
				open: false
		});

		gulp.watch("sass/**/*.scss", ['style']);
		gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);



// Оставьте эту строку в самом конце файла
require("./.gosha");
