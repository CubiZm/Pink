"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var combineMq = require("gulp-combine-mq");
var browserSync = require('browser-sync').create();

gulp.task("build", function() {
	["style", "images", "script", "html"];
});

gulp.task("style", function() {
	return gulp.src("source/sass/style.{sass,scss}")
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		})).on('error', sass.logError)
		.pipe(postcss([
			autoprefixer({browsers: "last 2 versions"})
		]))
		.pipe(combineMq())
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

gulp.task("script", function() {
	return gulp.src("source/js/*.js")
		.pipe(rename("script.js"))
		.pipe(gulp.dest("build/js"))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("build/js"))
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
