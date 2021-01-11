"use strict";
exports.__esModule = true;
var react_1 = require("react");
var text_1 = require("../so-simple/text");
var check_1 = require("../so-simple/check");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("div", { className: "content__show-todo__item" },
        react_1["default"].createElement(check_1["default"], { isDone: props.isDone }),
        react_1["default"].createElement(text_1["default"], { content: props.content })));
});
