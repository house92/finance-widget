var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

var sassFiles = "src/scss/**/*.scss",
    cssDest = "src/";

gulp.task("styles", function () {
    gulp.src(sassFiles)
        .pipe(sass().on("error", sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task("watch",function () {
    gulp.watch(sassFiles,["styles"]);
});

gulp.task("default", ["watch"]);
