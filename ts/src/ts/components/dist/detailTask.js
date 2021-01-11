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
var clickable_1 = require("./clickable");
var input_1 = require("./input");
var constants_1 = require("../lib/constants");
exports["default"] = (function (props) {
    var item = props.item, _a = props.detailTask, activity = _a.activity, onCheckTask = _a.onCheckTask, modalCheckTaskConfirm = _a.modalCheckTaskConfirm, onEditTaskName = _a.onEditTaskName, modalTaskEdit = _a.modalTaskEdit, inputTaskEdit = _a.inputTaskEdit, modalTaskEditConfirm = _a.modalTaskEditConfirm, modalTaskEditConfirmContent = _a.modalTaskEditConfirmContent, onDeleteTask = _a.onDeleteTask, modalTaskDeleteConfirm = _a.modalTaskDeleteConfirm;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, item.tasks.map(function (subItem) {
        return (react_1["default"].createElement("div", { className: "content__show-todo__item", key: subItem.id },
            react_1["default"].createElement(clickable_1["default"], { type: "checkMark", className: "done", isDone: subItem.isDone, itemId: subItem.id, onClick: onCheckTask }),
            react_1["default"].createElement(clickable_1["default"], { type: "content", className: "subtext", content: subItem.taskName, itemId: subItem.id, onClick: onCheckTask }),
            constants_1.SETTINGS_TASK_CHECK_CONFIRM &&
                activity.details_CheckTask_TaskId == subItem.id &&
                react_1["default"].createElement(modal_1["default"], __assign({}, modalCheckTaskConfirm, { itemId: subItem.id }),
                    "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                    subItem.taskName),
            react_1["default"].createElement(clickable_1["default"], { type: "edit", className: "edit-symbol", itemId: subItem.id, onClick: onEditTaskName }),
            activity.details_EditTask_TaskId == subItem.id &&
                react_1["default"].createElement(modal_1["default"], __assign({}, modalTaskEdit, { itemId: subItem.id }),
                    react_1["default"].createElement(input_1["default"], __assign({}, inputTaskEdit)),
                    constants_1.SETTINGS_TASK_EDIT_CONFIRM &&
                        activity.details_EditTask_TaskId == subItem.id &&
                        react_1["default"].createElement(modal_1["default"], __assign({}, modalTaskEditConfirm, { itemId: subItem.id }),
                            "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                            modalTaskEditConfirmContent)),
            react_1["default"].createElement(clickable_1["default"], { type: "delete", className: "delete-symbol", itemId: subItem.id, onClick: onDeleteTask }),
            constants_1.SETTINGS_TASK_DELETE_CONFIRM &&
                activity.details_DeleteTask_TaskId == subItem.id &&
                react_1["default"].createElement(modal_1["default"], __assign({}, modalTaskDeleteConfirm, { itemId: subItem.id }),
                    "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: ",
                    subItem.taskName)));
    })));
});
