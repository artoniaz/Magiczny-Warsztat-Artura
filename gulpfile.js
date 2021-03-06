var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function () {
    return gulp.src("scss/**/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({errorLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", ["sass"]);
});