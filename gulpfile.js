const { src } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// function buildCSS(done) {
//     src('CSS/**/**.css').pipe(cleanCSS({compatibility: 'ie8'}).pipe(dest)
//     done();
// }