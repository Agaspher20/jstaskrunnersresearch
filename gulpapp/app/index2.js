define("index", ["loggerModule"], function() {
    var element = document.createElement("div");
    element.innerHTML = "This is second module";
    document.body.appendChild(element);
});
