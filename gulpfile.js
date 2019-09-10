var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require('gulp-concat'),
    browserSync = require("browser-sync").create();


var paths = {
    styles: {
        src: "src/scss/*.scss", // Source folder for scss files (these are all in one place)
        dest: "src/css"         // Where the compiled file ends up
    }
}; 

// A function for mashing together the css and putting it in the right place:
function style() {
    return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())    // Initialize sourcemaps before compilation starts
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(concat('bela-sample.css'))
    .pipe(sourcemaps.write())   // Now add/write the sourcemaps
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream()); // Add browsersync after compilation
}

// A simple task to reload the page
function reload() {
    browserSync.reload();
}


// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server - cool!
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch(paths.styles.src, style);    // Gulp is watching the style directories
    gulp.watch("src/*.html", reload);       // Gulp is watching the index.html file
    gulp.watch('js/*.js', reload);          // Gulp is watching the js files
}

exports.watch = watch;                      // $ gulp watch -> watches the style, html and js files for changes


exports.style = style;                      // $ gulp style -> just mashes together the style directory

var build = gulp.parallel(style, watch);    // Specify build behaviour, ie if tasks run in series (`gulp.series`) or parallel (`gulp.parallel`).
 

gulp.task('build', build);
 
gulp.task('default', build);                // default task that runs by using `gulp` on cli (just builds)