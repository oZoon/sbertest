"use strict";
exports.__esModule = true;
var react_1 = require("react");
var modal_1 = require("./modal");
var input_1 = require("./input");
var constants_1 = require("../lib/constants");
exports["default"] = (function (props) {
    var activity = props.activity, onNewTaskCancel = props.onNewTaskCancel, onNewTaskSubmit = props.onNewTaskSubmit, onNewTaskPartialData = props.onNewTaskPartialData, onNewTaskConfirmCancel = props.onNewTaskConfirmCancel, onNewTaskConfirmSubmit = props.onNewTaskConfirmSubmit;
    return (react_1["default"].createElement(modal_1["default"], { title: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430", isOpen: activity.newTask_ShowDialog, zIndex: parseInt('2'), cancel: Boolean(true), onCancel: onNewTaskCancel, submit: Boolean(true), onSubmit: onNewTaskSubmit, disabled: activity.newTask_PartialData.length == 0 ? 'disabled' : '' },
        react_1["default"].createElement(input_1["default"], { id: 'newTask', type: 'text', onPartialSave: onNewTaskPartialData, partialData: activity.newTask_PartialData }),
        constants_1.SETTINGS_NEW_TASK_CONFIRM &&
            react_1["default"].createElement(modal_1["default"], { title: '\u0432\u0441\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E ?', isOpen: activity.newTask_ShowConfirm, zIndex: parseInt('3'), cancel: Boolean(true), cancelName: '\u041D\u0415\u0422', onCancel: onNewTaskConfirmCancel, submit: Boolean(true), submitName: '\u0414\u0410', onSubmit: onNewTaskConfirmSubmit },
                "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430: ",
                activity.newTask_PartialData)));
});
