// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// const transpileSassToCss = (cb) => {
//     return gulp.src(`src/sass/main.scss`)
//         .pipe(sass())
//         .pipe(gulp.dest(`src/css`))
// }

// exports.default = transpileSassToCss;

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function transpileSassToCss () {
    return gulp.src(`src/sass/**/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`src/css`))
}

function watchSassFile () {
    return gulp.watch(['src/sass/**/*.scss'], transpileSassToCss)
}

function beingWatched () {
    console.log(`I am being watched`);
    cb();
}


exports.default = gulp.series(beingWatched, watchSassFile)