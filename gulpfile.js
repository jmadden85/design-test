var gulp = require('gulp');
var watch = require('gulp-watch');
var git = require('gulp-git');
var runSequence = require('run-sequence');

gulp.task('watch', function () {
    watch(['./*.psd', './*.js'], function (files, cb) {
        gulp.start('git', cb);
    });
});

gulp.task('git', function () {
  var date = new Date();
  gulp.src('./')
  .pipe(git.add())
  .pipe(git.commit(date))
  .pipe(git.push());
});
//abc
gulp.task('default', ['watch']);