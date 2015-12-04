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
		.pipe(sass()).on('error', sass.logError)
		.pipe(postcss([
			autoprefixer({browsers: "last 2 versions"})
		]))
		.pipe(gulp.dest("css"));
});

gulp.task("start", ["style"], function() {
	gulp.watch("sass/**/*.{sass,scss}", ["style"]);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

		browserSync.init({
				server: "./app"
		});

		gulp.watch("app/scss/*.scss", ['sass']);
		gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
		return gulp.src("app/scss/*.scss")
				.pipe(sass())
				.pipe(gulp.dest("app/css"))
				.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



// Оставьте эту строку в самом конце файла
require("./.gosha");
