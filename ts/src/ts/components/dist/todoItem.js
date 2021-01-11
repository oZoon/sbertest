"use strict";
exports.__esModule = true;
var react_1 = require("react");
var leftArrow_1 = require("./leftArrow");
var todoName_1 = require("./todoName");
var detailsButton_1 = require("./detailsButton");
var deleteButton_1 = require("./deleteButton");
exports["default"] = (function (_a) {
    var isExpanded = _a.isExpanded, itemId = _a.itemId, content = _a.content, onTaskVisible = _a.onTaskVisible, onOpenTodoDetails = _a.onOpenTodoDetails, onDeleteTodo = _a.onDeleteTodo;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(leftArrow_1["default"], { isExpanded: isExpanded }),
        react_1["default"].createElement(todoName_1["default"], { itemId: itemId, content: content, onClick: onTaskVisible }),
        react_1["default"].createElement(detailsButton_1["default"], { itemId: itemId, onClick: onOpenTodoDetails }),
        react_1["default"].createElement(deleteButton_1["default"], { itemId: itemId, onClick: onDeleteTodo })));
});
