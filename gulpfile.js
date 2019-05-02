let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let csso = require('gulp-csso');
let htmlmin = require('gulp-htmlmin');
let webpackstream = require('webpack-stream');
let webpack = require('webpack');
let webpackconfig = require("./webpack.config.js");
let browsersync = require('browser-sync').create();
let autoprefixerOptions = {
    browsers: ['last 2 versions']
};

function styles() {
    return gulp.src('./src/style.css')
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(csso())
        .pipe(gulp.dest('./dist'))
        .pipe(browsersync.stream());
}

gulp.task('styles', (done) => {
     gulp.src('./src/style.css')
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(csso())
        .pipe(gulp.dest('./dist'))
         .pipe(browsersync.stream({match: '**/*.css'}));
     done();
});

function html() {
    return gulp.src(['./src/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(browsersync.stream());
}

gulp.task('html', (done) => {
    gulp.src(['./src/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(browsersync.stream({match: '**/*.html'}));
    done();
});

function scripts() {
    return (
        gulp
            .src('./src')
            .pipe(webpackstream(webpackconfig, webpack))
            .pipe(gulp.dest('./dist'))
            .pipe(browsersync.stream())
    )
}

gulp.task('webpack', (done) => {
    gulp.src('dist/')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('dist/'))
        .pipe(browsersync.reload);
    done();
});

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function watchFiles() {
    gulp.watch("./src/*.css", styles);
    gulp.watch("./src/*.html", html);
    gulp.watch("./src/*.js", scripts);
}

gulp.task('watch', (done) => {
   gulp.watch("src/*.css", gulp.parallel('styles'));
   gulp.watch('src/*.js', gulp.parallel('webpack'));
   gulp.watch('src/*.html', gulp.parallel('html'));
   done();
});


const watch = gulp.parallel(watchFiles, browserSync);

gulp.task('default', watch);
