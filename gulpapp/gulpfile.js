var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var amdOptimize = require("gulp-amd-optimizer");

var config = {
    //Include all js files but exclude any min.js files
    packages: [
        "index1",
        "index2"
    ],
    dest: "dist/",
    dev: false
}

var requireConfig = {
    baseUrl: "app",
    paths: {
        lodash: "../bower_components/lodash/lodash"
    },
    exclude: ["lodash"]
};
var options = {
    umd: false
};

//delete the output file(s)
gulp.task("clean", function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(["dist/**/*.js"]);
});

var tasks = []
for(var i = 0; i < config.packages.length; ++i){
    (function(taskName, packageName, index) {
        tasks.push(taskName);
        gulp.task(taskName, ["clean"], function() {
            var packagePipe = gulp
                .src(["app/appEntry.js", "app/" + packageName + ".js"])
                .pipe(amdOptimize(requireConfig, options));
            if(!config.dev) {
                packagePipe = packagePipe.pipe(concat("appEntry" + index + ".js"))
            }
            return packagePipe
                .pipe(gulp.dest(config.dest));
            });
    }("package" + i, config.packages[i], i));
}

gulp.task("default", tasks, function(){});
