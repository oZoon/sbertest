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
var modal_1 = require("./modal");
var todoItem_1 = require("./todoItem");
var taskItem_1 = require("./taskItem");
var editTodo_1 = require("./editTodo");
var constants_1 = require("../lib/constants");
exports["default"] = (function (props) {
    var todos = props.todos, activityTodoList = props.activityTodoList, modalDeleteTodoConfirm = props.modalDeleteTodoConfirm, modalDetailTodo = props.modalDetailTodo, onTaskVisible = props.onTaskVisible, onOpenTodoDetails = props.onOpenTodoDetails, onDeleteTodo = props.onDeleteTodo, editTodo = props.editTodo;
    return (react_1["default"].createElement("div", { className: "content__show-todo__list" }, todos.map(function (item) {
        return (react_1["default"].createElement("div", { key: item.id },
            react_1["default"].createElement("div", { className: "content__show-todo__item" },
                react_1["default"].createElement(todoItem_1["default"], { isExpanded: item.isExpanded, itemId: item.id, content: item.todoName, onTaskVisible: onTaskVisible, onOpenTodoDetails: onOpenTodoDetails, onDeleteTodo: onDeleteTodo }),
                constants_1.SETTINGS_DELETE_TODO_CONFIRM &&
                    activityTodoList.deleteTodo_TodoId == item.id &&
                    react_1["default"].createElement(modal_1["default"], __assign({}, modalDeleteTodoConfirm, { itemId: item.id }),
                        "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438: ",
                        item.todoName)),
            react_1["default"].createElement("div", { style: item.isExpanded ? { display: 'block' } : { display: 'none' } }, item.tasks.map(function (subItem) { return react_1["default"].createElement(taskItem_1["default"], { key: subItem.id, isDone: subItem.isDone, content: subItem.taskName }); })),
            react_1["default"].createElement("div", { style: activityTodoList.details_TodoId == item.id ? { display: 'block' } : { display: 'none' } },
                react_1["default"].createElement(modal_1["default"], __assign({}, modalDetailTodo, { isOpen: item.editDialogVisible, itemId: item.id }),
                    react_1["default"].createElement(editTodo_1["default"], { item: item, editTodo: editTodo })))));
    })));
});
