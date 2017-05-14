var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var amdOptimize = require("gulp-amd-optimizer");

var config = {
    //Include all js files but exclude any min.js files
    packages: [
        {
            name: "app_one"
        },
        {
            name: "app_two",
            dependencies: ["config.js"]
        }
    ],
    dest: "dist/",
    dev: false
}

var requireConfig = {
    baseUrl: "app",
    paths: {
        lodash: "../bower_components/lodash/lodash",
        jquery: "../bower_components/jquery/dist/jquery",
        commonModules: "commonModules"
    },
    exclude: ["lodash", "jquery"]
};
var options = {
    umd: false
};

gulp.task("clean", function () {
    return del(["dist/**/"]);
});

var tasks = []
for(var i = 0; i < config.packages.length; ++i){
    (function(taskName, package, index) {
        tasks.push(taskName);
        gulp.task(taskName, ["clean"], function() {
            var packageFiles = ["app/appEntry.js", "app/" + package.name + "/index.js"],
                packagePipe;
            if(package.dependencies) {
                for(var i = 0; i < package.dependencies.length; ++i) {
                    packageFiles.push("app/" + package.name + "/" + package.dependencies[i]);
                }
            }
            console.log(packageFiles);
            packagePipe = gulp
                .src(packageFiles)
                .pipe(amdOptimize(requireConfig, options));
            if(!config.dev) {
                packagePipe = packagePipe.pipe(concat("appEntry.js"))
            }
            return packagePipe
                .pipe(gulp.dest(config.dest + package.name));
            });
    }("package" + i, config.packages[i], i));
}

gulp.task("default", tasks, function(){});
