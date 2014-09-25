var gulp = require('gulp');
var watch = require('gulp-watch');
var git = require('gulp-git');
var runSequence = require('run-sequence');

gulp.task('watch', function () {
    watch('./*', function (files, cb) {
        gulp.start('git', cb);
    });
});

gulp.task('commit', function () {
  var date = new Date();
  return gulp.src(['./*.psd', './*.js'])
    .pipe(git.add())
    .pipe(git.commit(date));
});

gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('git', function () {
  runSequence('commit', 'push');
});

gulp.task('default', ['watch']);