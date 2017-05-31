var whiteSpace = require("whiteSpaceModule.js");
var logger = require("loggerModule.js");
var _ = require("lodash");

var res = whiteSpace.component(["Hello", "system", "js"], _);

document.body.appendChild(res);
logger.log();