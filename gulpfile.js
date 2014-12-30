var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
          sourceComments: 'map'
        }))
        .pipe(gulp.dest('./css'));
});
