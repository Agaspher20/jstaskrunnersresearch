define("index", ["whiteSpaceModule"], function(module) {
    var res = module.component(["Hello", "gulp", "world"]);
    document.body.appendChild(res);
});
