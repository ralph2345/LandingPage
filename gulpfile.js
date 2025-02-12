const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('scss_files/main.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'));
}

function watchTask() {
    watch(['scss_files/**/*.scss'], buildStyles); 
}

exports.default = series(buildStyles, watchTask);
