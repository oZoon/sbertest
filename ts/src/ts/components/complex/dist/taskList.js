"use strict";
exports.__esModule = true;
var react_1 = require("react");
var itemTask_1 = require("../simple/itemTask");
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.tasks.map(function (subItem) {
        return (react_1["default"].createElement(itemTask_1["default"], { key: subItem.id, isDone: subItem.isDone, content: subItem.taskName }));
    })));
});
