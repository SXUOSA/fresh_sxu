const gulp = require("gulp");
const exec = require('child_process').exec;

gulp.task("buildpc", function (cb) {
    exec("cd pc/fresh-sxu-pc-end&&npm run build", function (err) {
        if (err) {
            console.log(err);
        } 
        cb();
    })
});

gulp.task("buildmobile", function (cb) {
    exec("cd mobile/fresh-sxu-mobile-end&&npm run build", function (err) {
        if (err) {
            console.log(err);
        } 
        cb();
    })
});

gulp.task('buildall', gulp.parallel('buildpc', 'buildmobile', function(cb){
    cb();
}));