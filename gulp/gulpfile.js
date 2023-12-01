const gulp = require('gulp');
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');
const server = require('gulp-server-livereload');

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', () => {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', () => {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
});

const serverOptions = {
    livereload: true,
    open: true,
};

gulp.task('server', function () {
    return gulp.src('./dist/')
        .pipe(server(serverOptions));
});

gulp.task('default', gulp.parallel('js', 'css', 'html', 'images'));

gulp.task('watch', () => {
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/img/**/*', gulp.series('images'));
});
