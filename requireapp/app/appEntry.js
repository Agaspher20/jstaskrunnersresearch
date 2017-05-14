requirejs.config({
    baseUrl: "app",
    paths: {
        lodash: "../bower_components/lodash/lodash"
    }
});

requirejs(["index"]);
