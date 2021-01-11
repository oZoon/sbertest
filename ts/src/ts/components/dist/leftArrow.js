"use strict";
exports.__esModule = true;
var react_1 = require("react");
exports["default"] = (function (_a) {
    var isExpanded = _a.isExpanded;
    return (react_1["default"].createElement("span", { className: "content__show-todo__arrow-symbol" }, isExpanded ? '▼' : '►'));
});
