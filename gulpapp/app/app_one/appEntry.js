requirejs.config({
    baseUrl: "dist/app_one",
    paths: {
        lodash: "../../bower_components/lodash/lodash"
    }
});

requirejs(["index"]);
