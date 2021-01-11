"use strict";
exports.__esModule = true;
var react_1 = require("react");
var taskName_1 = require("./taskName");
var checkReadOnly_1 = require("./checkReadOnly");
exports["default"] = (function (_a) {
    var isDone = _a.isDone, content = _a.content;
    return (react_1["default"].createElement("div", { className: "content__show-todo__item" },
        react_1["default"].createElement(checkReadOnly_1["default"], { isDone: isDone }),
        react_1["default"].createElement(taskName_1["default"], { content: content })));
});
