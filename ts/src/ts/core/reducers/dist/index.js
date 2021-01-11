"use strict";
exports.__esModule = true;
var init_1 = require("./init");
var todos_1 = require("./todos");
exports["default"] = (function (state, action) {
    if (state === void 0) { state = init_1["default"]; }
    return todos_1["default"](state, action);
});
