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
var buttonNewTodo_1 = require("../components/simple/buttonNewTodo");
var newTodo_1 = require("../components/simple/newTodo");
var todoList_1 = require("../components/complex/todoList");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("div", { className: "content" },
        react_1["default"].createElement(buttonNewTodo_1["default"], { onClick: props.onNewTodoDialog }),
        react_1["default"].createElement(newTodo_1["default"], __assign({}, props.newTodo)),
        react_1["default"].createElement(todoList_1["default"], __assign({}, props.todoList))));
});
