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
var itemTodoInModal_1 = require("../simple/itemTodoInModal");
var buttonNewTask_1 = require("../simple/buttonNewTask");
var newTask_1 = require("../simple/newTask");
var taskListInModal_1 = require("../complex/taskListInModal");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("div", { key: props.item.id },
        react_1["default"].createElement(itemTodoInModal_1["default"], __assign({}, props.itemTodoInModal, { item: props.item })),
        react_1["default"].createElement(buttonNewTask_1["default"], { onClick: props.onNewTask, id: props.item.id }),
        react_1["default"].createElement(newTask_1["default"], __assign({}, props.newTask)),
        react_1["default"].createElement(taskListInModal_1["default"], __assign({}, props.taskListInModal, { item: props.item }))));
});
