"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var newTaskButton_1 = require("./newTaskButton");
var newTaskDialog_1 = require("./newTaskDialog");
var detailTodoName_1 = require("./detailTodoName");
var detailTask_1 = require("./detailTask");
exports["default"] = (function (props) {
    var item = props.item, _a = props.editTodo, detailTodoName = _a.detailTodoName, onNewTask = _a.onNewTask, newTaskDialogComponent = _a.newTaskDialogComponent, detailTask = _a.detailTask;
    return (react_1["default"].createElement("div", { key: item.id },
        react_1["default"].createElement(detailTodoName_1["default"], { detailTodoName: detailTodoName, item: item }),
        react_1["default"].createElement(newTaskButton_1["default"], { onClick: onNewTask, id: item.id }),
        react_1["default"].createElement(newTaskDialog_1["default"], __assign({}, newTaskDialogComponent)),
        react_1["default"].createElement(detailTask_1["default"], { detailTask: detailTask, item: item })));
});
