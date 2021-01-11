"use strict";
exports.__esModule = true;
var react_1 = require("react");
var clickable_1 = require("./clickable");
var no_clickable_1 = require("./no-clickable");
exports["default"] = (function (_a) {
    var content = _a.content, id = _a.id, onEditTodoName = _a.onEditTodoName;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(no_clickable_1["default"], { type: "content", className: "text", content: content }),
        react_1["default"].createElement(clickable_1["default"], { type: "edit", className: "edit-symbol", itemId: id, onClick: onEditTodoName })));
});
