var gulp = require('gulp');

gulp.task('hello', function() {
  console.log('say Hello!');
});

gulp.task('world', function() {
	console.log('say World!');
});

gulp.task('default', ['hello', 'world']);
