"use strict";
exports.__esModule = true;
exports.newTaskConfirmSubmit = exports.newTaskConfirmCancel = exports.newTaskPartialData = exports.newTaskSubmit = exports.newTaskCancel = exports.newTask = exports.checkTaskConfirmSubmit = exports.checkTaskConfirmCancel = exports.checkTask = exports.editTaskNameConfirmSubmit = exports.editTaskNameConfirmCancel = exports.editTaskNamePartialData = exports.editTaskNameSubmit = exports.editTaskNameCancel = exports.editTaskName = exports.deleteTaskConfirmSubmit = exports.deleteTaskConfirmCanCel = exports.deleteTask = exports.editTodoNameConfirmSubmit = exports.editTodoNameConfirmCancel = exports.editTodoNamePartialData = exports.editTodoNameSubmit = exports.editTodoNameCancel = exports.editTodoName = exports.deleteToDoSubmit = exports.deleteTodoCancel = exports.deleteTodo = exports.closeTodoDetails = exports.openTodoDetails = exports.taskVisible = exports.newTodoConfirmSubmit = exports.newTodoConfirmCancel = exports.newTodoPartialData = exports.newTodoSubmit = exports.newTodoCancel = exports.newTodoDialog = void 0;
var c = require("../../lib/constants");
exports.newTodoDialog = function () {
    return {
        type: c.TODO_NEW_DIALOG
    };
};
exports.newTodoCancel = function () {
    return {
        type: c.TODO_NEW_CANCEL
    };
};
exports.newTodoSubmit = function () {
    var action = c.SETTINGS_NEW_TODO_CONFIRM ? c.TODO_NEW_SUBMIT : c.TODO_NEW_CONFIRM_SUBMIT;
    return {
        type: action
    };
};
exports.newTodoPartialData = function (_a) {
    var text = _a.data.text;
    return {
        type: c.TODO_NEW_PARTIAL_SAVE,
        text: text
    };
};
exports.newTodoConfirmCancel = function () {
    return {
        type: c.TODO_NEW_CONFIRM_CANCEL
    };
};
exports.newTodoConfirmSubmit = function () {
    return {
        type: c.TODO_NEW_CONFIRM_SUBMIT
    };
};
exports.taskVisible = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TASK_VISIBLE,
        id: id
    };
};
exports.openTodoDetails = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TODO_DETAILS,
        visible: true,
        id: id
    };
};
exports.closeTodoDetails = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TODO_DETAILS,
        visible: false,
        id: id
    };
};
exports.deleteTodo = function (_a) {
    var id = _a.data.id;
    var action = c.SETTINGS_DELETE_TODO_CONFIRM ? c.TODO_DELETE_SUBMIT : c.TODO_DELETE_CONFIRM_SUBMIT;
    return {
        type: action,
        id: id
    };
};
exports.deleteTodoCancel = function () {
    return {
        type: c.TODO_DELETE_CONFIRM_CANCEL
    };
};
exports.deleteToDoSubmit = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TODO_DELETE_CONFIRM_SUBMIT,
        id: id
    };
};
exports.editTodoName = function () {
    return {
        type: c.TODO_EDIT_NAME_DIALOG
    };
};
exports.editTodoNameCancel = function () {
    return {
        type: c.TODO_EDIT_NAME_CANCEL
    };
};
exports.editTodoNameSubmit = function () {
    var action = c.SETTINGS_EDIT_TODO_CONFIRM ? c.TODO_EDIT_NAME_SUBMIT : c.TODO_EDIT_NAME_CONFIRM_SUBMIT;
    return {
        type: action
    };
};
exports.editTodoNamePartialData = function (_a) {
    var text = _a.data.text;
    return {
        type: c.TODO_EDIT_NAME_PARTIAL_SAVE,
        text: text
    };
};
exports.editTodoNameConfirmCancel = function () {
    return {
        type: c.TODO_EDIT_NAME_CONFIRM_CANCEL
    };
};
exports.editTodoNameConfirmSubmit = function () {
    return {
        type: c.TODO_EDIT_NAME_CONFIRM_SUBMIT
    };
};
exports.deleteTask = function (_a) {
    var id = _a.data.id;
    var action = c.SETTINGS_TASK_DELETE_CONFIRM ? c.TASK_DELETE_SUBMIT : c.TASK_DELETE_CONFIRM_SUBMIT;
    return {
        type: action,
        id: id
    };
};
exports.deleteTaskConfirmCanCel = function () {
    return {
        type: c.TASK_DELETE_CONFIRM_CANCEL
    };
};
exports.deleteTaskConfirmSubmit = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TASK_DELETE_CONFIRM_SUBMIT,
        id: id
    };
};
exports.editTaskName = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TASK_EDIT_NAME_DIALOG,
        id: id
    };
};
exports.editTaskNameCancel = function () {
    return {
        type: c.TASK_EDIT_NAME_CANCEL
    };
};
exports.editTaskNameSubmit = function () {
    var action = c.SETTINGS_TASK_EDIT_CONFIRM ? c.TASK_EDIT_NAME_SUBMIT : c.TASK_EDIT_NAME_CONFIRM_SUBMIT;
    return {
        type: action
    };
};
exports.editTaskNamePartialData = function (_a) {
    var text = _a.data.text;
    return {
        type: c.TASK_EDIT_NAME_PARTIAL_SAVE,
        text: text
    };
};
exports.editTaskNameConfirmCancel = function () {
    return {
        type: c.TASK_EDIT_NAME_CONFIRM_CANCEL
    };
};
exports.editTaskNameConfirmSubmit = function () {
    return {
        type: c.TASK_EDIT_NAME_CONFIRM_SUBMIT
    };
};
exports.checkTask = function (_a) {
    var id = _a.data.id;
    var action = c.SETTINGS_TASK_CHECK_CONFIRM ? c.TASK_CHECK_SUBMIT : c.TASK_CHECK_CONFIRM_SUBMIT;
    return {
        type: action,
        id: id
    };
};
exports.checkTaskConfirmCancel = function () {
    return {
        type: c.TASK_CHECK_CONFIRM_CANCEL
    };
};
exports.checkTaskConfirmSubmit = function (_a) {
    var id = _a.data.id;
    return {
        type: c.TASK_CHECK_CONFIRM_SUBMIT,
        id: id
    };
};
exports.newTask = function () {
    return {
        type: c.TASK_NEW_DIALOG
    };
};
exports.newTaskCancel = function () {
    return {
        type: c.TASK_NEW_CANCEL
    };
};
exports.newTaskSubmit = function () {
    var action = c.SETTINGS_NEW_TASK_CONFIRM ? c.TASK_NEW_SUBMIT : c.TASK_NEW_CONFIRM_SUBMIT;
    return {
        type: action
    };
};
exports.newTaskPartialData = function (_a) {
    var text = _a.data.text;
    return {
        type: c.TASK_NEW_PARTIAL_SAVE,
        text: text
    };
};
exports.newTaskConfirmCancel = function () {
    return {
        type: c.TASK_NEW_CONFIRM_CANCEL
    };
};
exports.newTaskConfirmSubmit = function () {
    return {
        type: c.TASK_NEW_CONFIRM_SUBMIT
    };
};
