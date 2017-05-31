var module = (function () {
    return {
        component: function (words, _) {
            var element = document.createElement("div");
            /* lodash is required for the next line to work */
            element.innerHTML = _.join(words, " ");
            return element;
        }
    };
}());
