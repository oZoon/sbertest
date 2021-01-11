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
var input_1 = require("../so-simple/input");
var doCheck_1 = require("../so-simple/doCheck");
var doText_1 = require("../so-simple/doText");
var doEdit_1 = require("../so-simple/doEdit");
var doDelete_1 = require("../so-simple/doDelete");
var constants_1 = require("../../lib/constants");
exports["default"] = (function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(doCheck_1["default"], { itemId: props.subItem.id, isDone: props.subItem.isDone, onClick: props.onCheckTask }),
        react_1["default"].createElement(doText_1["default"], { itemId: props.subItem.id, content: props.subItem.taskName, onClick: props.onCheckTask }),
        constants_1.SETTINGS_TASK_CHECK_CONFIRM &&
            props.activity.detailsCheckTaskTaskId == props.subItem.id &&
            react_1["default"].createElement(modal_1["default"], __assign({}, props.modalCheckTaskConfirm, { itemId: props.subItem.id }),
                "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                props.subItem.taskName),
        react_1["default"].createElement(doEdit_1["default"], { itemId: props.subItem.id, onClick: props.onEditTaskName }),
        props.activity.detailsEditTaskTaskId == props.subItem.id &&
            react_1["default"].createElement(modal_1["default"], __assign({}, props.modalTaskEdit, { itemId: props.subItem.id }),
                react_1["default"].createElement(input_1["default"], __assign({}, props.inputTaskEdit)),
                constants_1.SETTINGS_TASK_EDIT_CONFIRM &&
                    props.activity.detailsEditTaskTaskId == props.subItem.id &&
                    react_1["default"].createElement(modal_1["default"], __assign({}, props.modalTaskEditConfirm, { itemId: props.subItem.id }),
                        "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                        props.modalTaskEditConfirmContent)),
        react_1["default"].createElement(doDelete_1["default"], { itemId: props.subItem.id, onClick: props.onDeleteTask }),
        constants_1.SETTINGS_TASK_DELETE_CONFIRM &&
            props.activity.detailsDeleteTaskTaskId == props.subItem.id &&
            react_1["default"].createElement(modal_1["default"], __assign({}, props.modalTaskDeleteConfirm, { itemId: props.subItem.id }),
                "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                props.subItem.taskName)));
});
