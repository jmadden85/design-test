var gulp = require('gulp');
var watch = require('gulp-watch');
var git = require('gulp-git');

gulp.task('build', function () {
  var date = new Date();
  return gulp.src('./*')
    .pipe(git.add())
    .pipe(git.commit(date));
    git.push('origin', 'master', function (err) {
      if (err) throw err;
    });
});

gulp.task('watch', function () {
    watch('designs/*', function (files, cb) {
        gulp.start('build', cb);
    });
});

gulp.task('default', ['watch']);