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
var input_1 = require("./input");
var todoNameDetail_1 = require("./todoNameDetail");
var constants_1 = require("../lib/constants");
exports["default"] = (function (props) {
    var item = props.item, _a = props.detailTodoName, onEditTodoName = _a.onEditTodoName, modalEditTodo = _a.modalEditTodo, inputEditTodo = _a.inputEditTodo, modalEditTodoConfirm = _a.modalEditTodoConfirm, modalEditTodoConfirmContent = _a.modalEditTodoConfirmContent;
    return (react_1["default"].createElement("div", { className: "content__show-todo__item" },
        react_1["default"].createElement(todoNameDetail_1["default"], { content: item.todoName, id: item.id, onEditTodoName: onEditTodoName }),
        react_1["default"].createElement(modal_1["default"], __assign({}, modalEditTodo, { itemId: item.id }),
            react_1["default"].createElement(input_1["default"], __assign({}, inputEditTodo)),
            constants_1.SETTINGS_EDIT_TODO_CONFIRM &&
                react_1["default"].createElement(modal_1["default"], __assign({}, modalEditTodoConfirm),
                    "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438: ",
                    modalEditTodoConfirmContent))));
});
