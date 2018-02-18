const gulp = require('gulp');
const concat = require('gulp-concat');
const nunjucks = require('gulp-nunjucks');
const del = require('del');
const path = require('path');

gulp.task('debug', function () {
    gulp.src('src/*.html').pipe(gulp.dest('debug'));
    gulp.src('src/*.json').pipe(gulp.dest('debug'));
    gulp.src('src/*.js').pipe(gulp.dest('debug'));
    gulp.src('src/pages/**/*').pipe(gulp.dest('debug/pages'));
    gulp.src('src/menu/**/*').pipe(gulp.dest('debug/menu'));
    gulp.src('src/fonts/*').pipe(gulp.dest('debug/fonts'));
    gulp.src('src/lib/**/*').pipe(gulp.dest('debug/lib'));
    gulp.src('src/sound/**/*').pipe(gulp.dest('debug/sound'));
    gulp.src('src/img/**/*').pipe(gulp.dest('debug/img'));
    gulp.src('src/reuse/**/*').pipe(gulp.dest('debug/reuse'));
    gulp.src('src/css/*.css').pipe(gulp.dest('debug/css'));
    gulp.src('src/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('debug/js'));
    gulp.src('src/templates/*.html').pipe(nunjucks.precompile()).pipe(gulp.dest('temp')).pipe(concat('templates.js')).pipe(gulp.dest('debug/'));
});

gulp.task('firebase', function () {
    gulp.src('src/*.html').pipe(gulp.dest('Firebase/public'));
    //gulp.src('src/manifest.json').pipe(gulp.dest('Firebase/public'));
    gulp.src('src/firebase-messaging-sw.js').pipe(gulp.dest('Firebase/public'));
    gulp.src('src/pages/**/*').pipe(gulp.dest('Firebase/public/pages'));
    gulp.src('src/menu/**/*').pipe(gulp.dest('Firebase/public/menu'));
    gulp.src('src/fonts/*').pipe(gulp.dest('Firebase/public/fonts'));
    gulp.src('src/lib/**/*').pipe(gulp.dest('Firebase/public/lib'));
    gulp.src('src/sound/**/*').pipe(gulp.dest('Firebase/public/sound'));
    gulp.src('src/img/**/*').pipe(gulp.dest('Firebase/public/img'));
    gulp.src('src/reuse/**/*').pipe(gulp.dest('Firebase/public/reuse'));
    gulp.src('src/css/*.css').pipe(gulp.dest('Firebase/public/css'));
    gulp.src('src/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('Firebase/public/js'));
    gulp.src('src/templates/*.html').pipe(nunjucks.precompile()).pipe(gulp.dest('temp')).pipe(concat('templates.js')).pipe(gulp.dest('Firebase/public'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', ['debug']).on('change', function (res) {
        if (res.type === 'deleted') {
            var filePathFromSrc = path.relative(path.resolve('src'), res.path);
            var debugFilePath = path.resolve('debug', filePathFromSrc);
            del.sync(debugFilePath);
        }
    });
});