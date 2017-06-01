define(["whiteSpaceModule.js"], function (whiteSpace) {
    var res = whiteSpace.component(["Hello", "system", "js"]);

    document.body.appendChild(res);
});
