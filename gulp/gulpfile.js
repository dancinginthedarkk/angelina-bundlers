const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const server = require('gulp-server-livereload');
// const imagemin = require('gulp-imagemin');

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/'));
});

const serverOptions = {
    livereload: true,
    open: true,
};

gulp.task('server:dev', function () {
    return gulp.src('./build/').pipe(server(serverOptions));
});

gulp.task('images', () => {
    return gulp.src('src/*.html')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.parallel('js', 'css', 'html'));
// gulp.task('default', gulp.parallel('js', 'css', 'html'));

gulp.task('watch', () => {
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/img/**/*', gulp.series('images'));
});
