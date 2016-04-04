'use strict';

var gulp = require('gulp'),
	concat= require('gulp-concat'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	sass=require('gulp-sass');

gulp.task('concatscripts',function(){
	return gulp.src([
		'assets/lib/jquery/jquery-1.12.1.min.js',
		'assets/lib/bootstrap/js/bootstrap.min.js',
		'assets/js/main.js'
		])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('assets/js'));
})

gulp.task('minifyscripts',['concatscripts'],function(){
	return gulp.src(['assets/js/app.js'])
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest('assets/js'))
})

gulp.task('compilesass',function(){
	return gulp.src(['assets/scss/style.scss'])
	.pipe(sass())
	.pipe(gulp.dest('assets/css'))
})

gulp.task('watchsass',function(){
	gulp.watch('assets/scss/**/*.scss',['compilesass']);
})

gulp.task("build",['minifyscripts','watchsass']);

gulp.task("default",["build"]);