const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

function reactTask() {
    return gulp.src('client/js/**/*.jsx')
        .pipe(babel({
            presets: ["@babel/preset-env", "@babel/preset-react"]
        }))
        .pipe(gulp.dest('build/static/js'))
};

function serverTask() {
    return gulp.src(['server/**/*.js','!node_modules/**'])
          .pipe(babel({
                "presets": ["@babel/preset-env"],
                "plugins": [
                    ["@babel/transform-runtime"]
                ]
          }))
          .pipe(gulp.dest('build/server'));
};

exports.default = gulp.parallel(reactTask,serverTask)