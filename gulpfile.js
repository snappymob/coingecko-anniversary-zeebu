const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const inject = require('gulp-inject');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const log = require('fancy-log');
const autoprefixer = require('autoprefixer');
const esbuild = require('gulp-esbuild');

gulp.task('clean', function () {
  return del(['./dist']);
});

gulp.task('build', function (cb) {
  gulp
    .src('src/*.html')
    .pipe(
      inject(
        gulp
          .src('./src/scss/*.scss')
          .pipe(sass())
          .pipe(
            postcss([
              atImport(),
              tailwindcss('tailwind.config.js'),
              autoprefixer({ overrideBrowserslist: 'last 1 version' }),
            ])
          )
          .pipe(
            cleanCSS({ debug: true }, (details) => {
              log(
                `cleanCSS: ${details.name}: reduced by ${(
                  ((details.stats.originalSize - details.stats.minifiedSize) / details.stats.originalSize) *
                  100
                ).toLocaleString(undefined, { maximumFractionDigits: 2 })}% (${details.stats.originalSize}b -> ${
                  details.stats.minifiedSize
                }b)`
              );
            })
          ),
        {
          starttag: '<!-- inject:styles -->',
          removeTags: true,
          transform: function (filePath, file) {
            return `<style>${file.contents.toString('utf-8')}</style>`;
          },
        }
      )
    )
    .pipe(
      htmlmin({ collapseWhitespace: true, removeComments: true, minifyJS: true, minifyCSS: true, minifyURLs: true })
    )
    .pipe(gulp.dest('./dist'));

  gulp
    .src('./src/tsx/App.tsx')
    .pipe(
      esbuild({
        bundle: true,
        minify: true,
        sourcemap: false,
        target: 'es2015',
        treeShaking: true,
        loader: {
          '.ts': 'tsx',
        },
        outfile: 'main.js',
      })
    )
    .pipe(gulp.dest('./dist'));

  cb();
});

gulp.task('watch', function (cb) {
  gulp.watch('./src/**/*', gulp.series('clean', 'build'));
  cb();
});

exports.build = gulp.series('build');
exports.default = gulp.series('clean', 'build', 'watch');
