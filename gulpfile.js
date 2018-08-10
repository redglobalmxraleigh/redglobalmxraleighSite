var gulp = require('gulp');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function () {

  var conn = ftp.create( {
    host:     'ftp.redglobalmxraleigh.org',
    user:     'ftpTestSite@redglobalmxraleigh.org',
    password: 'i+y1E4rPAT!o+',
    parallel: 1,
    log:      gutil.log
  } );

  var globs = [
    'public/assets/**',
    'public/partials/**',
    'public/index.html'
  ];

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src( globs, { base: '.', buffer: false } )
    .pipe( conn.newer( '/' ) ) // only upload newer files
    .pipe( conn.dest( '/' ) );

} );