var gulp         = require('gulp'),
    gutil        = require('gulp-util'),

    // image
    imagemin     = require('gulp-imagemin'),
    plumber      = require('gulp-plumber'),

    // style
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    
    // html
    fileinclude  = require('gulp-file-include'),

    // BS
    browserSync = require('browser-sync').create();




var paths  = { image: './images/**/*', style: './style.scss', script: './script.js', html: './index.html'},

    dest   = './_public',

    ignore = '!'+dest+'/**/*';


// IMAGE
gulp.task('image', function() {
	gulp.src(paths.image)
		.pipe(imagemin({progressive: true}).on('error', gutil.log))
		.pipe(gulp.dest(dest + '/images'));
});


// STYLE
gulp.task('style', function () {
	gulp.src(paths.style)
		.pipe(sass().on('error', sass.logError))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}).on('error', gutil.log))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest(dest));
});


// SCRIPT
gulp.task('script', function () {
	gulp.src('./script.js')
		.pipe(gulp.dest(dest));
});


// HTML
gulp.task('html', function() {
	gulp.src([paths.html, ignore])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}).on('error', gutil.log))
		.pipe(gulp.dest(dest));
});


// BROWSER SYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./_public"
        }
    });
});


gulp.task('all', ['image', 'style', 'script', 'html']);

gulp.task('default', ['watch', 'browser-sync']);

gulp.task('watch', function() {
	gulp.watch(paths.image,  ['image']);
	gulp.watch(paths.style,  ['style']);
	gulp.watch(paths.script, ['script']);
	gulp.watch('./*.html', ['html']);

	gulp.watch('./_public/**/*', browserSync.reload);
});