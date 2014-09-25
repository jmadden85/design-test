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
  gulp.src('./')
  .pipe(git.add())
  .pipe(git.commit('test'))
  .pipe(git.push());
});

// gulp.task('add', function(){
//   return gulp.src(['./*.psd', './*.js'])
//   .pipe(git.add());
// });

// gulp.task('commit', function () {
//   var date = new Date();
//   return gulp.src(['./*.psd', './*.js'])
//     .pipe(git.commit(date));
// });

// gulp.task('push', function(){
//   git.push('origin', 'master', {args: " -f"}, function (err) {
//     if (err) throw err;
//   });
// });
// gulp.task('git', function () {
//   runSequence('add', 'commit', 'push');
// });

/d
gulp.task('default', ['watch']);