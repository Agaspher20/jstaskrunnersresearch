(function () {
    "use strict";
    System.config({
        baseURL: "app",
        map: { lodash: "./jspm_packages/npm/lodash@4.17.4.js" },
        paths: { "npm:lodash@4.17.4/lodash.js": "./node_modules/lodash/lodash.js" }
    });
    System.import("index.js");
}());
