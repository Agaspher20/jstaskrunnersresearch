requirejs.config({
    baseUrl: "dist/app_two",
    paths: {
        lodash: "../../bower_components/lodash/lodash"
    }
});

requirejs(["index"]);
