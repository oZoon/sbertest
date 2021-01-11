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
var modal_1 = require("../so-simple/modal");
var itemTodo_1 = require("../simple/itemTodo");
var taskList_1 = require("../complex/taskList");
var detailTodo_1 = require("../complex/detailTodo");
var constants_1 = require("../../lib/constants");
exports["default"] = (function (props) {
    return (react_1["default"].createElement("div", { className: "content__show-todo__list" }, props.todos.map(function (item) {
        return (react_1["default"].createElement("div", { key: item.id },
            react_1["default"].createElement("div", { className: "content__show-todo__item" },
                react_1["default"].createElement(itemTodo_1["default"], __assign({ isExpanded: item.isExpanded, itemId: item.id, content: item.todoName }, props.itemTodo)),
                constants_1.SETTINGS_DELETE_TODO_CONFIRM &&
                    props.activityTodoList.deleteTodoTodoId == item.id &&
                    react_1["default"].createElement(modal_1["default"], __assign({}, props.deleteTodoConfirm, { itemId: item.id }),
                        "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438: ",
                        item.todoName)),
            react_1["default"].createElement("div", { style: item.isExpanded ? { display: 'block' } : { display: 'none' } },
                react_1["default"].createElement(taskList_1["default"], { tasks: item.tasks })),
            react_1["default"].createElement("div", { style: props.activityTodoList.detailsTodoId == item.id ? { display: 'block' } : { display: 'none' } },
                react_1["default"].createElement(modal_1["default"], __assign({}, props.modalDetailTodo, { isOpen: item.editDialogVisible, itemId: item.id }),
                    react_1["default"].createElement(detailTodo_1["default"], __assign({}, props.detailTodo, { item: item }))))));
    })));
});
