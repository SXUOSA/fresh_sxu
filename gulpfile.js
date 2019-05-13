const gulp = require("gulp");
const exec = require('child_process').exec;

gulp.task("buildpc", function (cb) {
    exec("cd pc/fresh-sxu-pc-end&&npm run build", function (err) {
        if (err) {
            console.log(err);
        } 
        gulp.src(["pc/fresh-sxu-pc-end/dist/*"])
            .pipe(gulp.dest("dist/pc/"))
        cb();
    })
});

gulp.task("buildmobile", function (cb) {
    exec("cd mobile/fresh-sxu-mobile-end&&npm run build", function (err) {
        if (err) {
            console.log(err);
        } 
        gulp.src(["mobile/fresh-sxu-mobile-end/dist/*"])
            .pipe(gulp.dest("dist/mobile/"))
        cb();
    })
});

gulp.task('buildall', gulp.parallel('buildpc', 'buildmobile', function(cb){
    cb();
}));