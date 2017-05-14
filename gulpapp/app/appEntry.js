requirejs.config({
    baseUrl: "dist",
    paths: {
        lodash: "../bower_components/lodash/lodash"
    }
});

requirejs(["index"]);
