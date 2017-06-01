define(["lodash"], function (_) {
    return {
        component: function (words) {
            var element = document.createElement("div");
            /* lodash is required for the next line to work */
            element.innerHTML = _.join(words, " ");
            return element;
        }
    };
});
