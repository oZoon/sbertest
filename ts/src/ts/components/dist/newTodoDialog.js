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
var constants_1 = require("../lib/constants");
exports["default"] = (function (props) {
    var modalTodoDialog = props.modalTodoDialog, inputTodoDialog = props.inputTodoDialog, modalTodoDialogConfirm = props.modalTodoDialogConfirm;
    return (react_1["default"].createElement(modal_1["default"], __assign({}, modalTodoDialog),
        react_1["default"].createElement(input_1["default"], __assign({}, inputTodoDialog)),
        constants_1.SETTINGS_NEW_TODO_CONFIRM &&
            react_1["default"].createElement(modal_1["default"], __assign({}, modalTodoDialogConfirm),
                "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430: ",
                inputTodoDialog.partialData)));
});
