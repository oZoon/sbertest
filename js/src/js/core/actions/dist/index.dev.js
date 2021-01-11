"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newTaskConfirmSubmit = exports.newTaskConfirmCancel = exports.newTaskPartialData = exports.newTaskSubmit = exports.newTaskCancel = exports.newTask = exports.checkTaskConfirmSubmit = exports.checkTaskConfirmCancel = exports.checkTask = exports.editTaskNameConfirmSubmit = exports.editTaskNameConfirmCancel = exports.editTaskNamePartialData = exports.editTaskNameSubmit = exports.editTaskNameCancel = exports.editTaskName = exports.deleteTaskConfirmSubmit = exports.deleteTaskConfirmCanCel = exports.deleteTask = exports.editTodoNameConfirmSubmit = exports.editTodoNameConfirmCancel = exports.editTodoNamePartialData = exports.editTodoNameSubmit = exports.editTodoNameCancel = exports.editTodoName = exports.deleteToDoSubmit = exports.deleteTodoCancel = exports.deleteTodo = exports.closeTodoDetails = exports.openTodoDetails = exports.taskVisible = exports.newTodoConfirmSubmit = exports.newTodoConfirmCancel = exports.newTodoPartialData = exports.newTodoSubmit = exports.newTodoCancel = exports.newTodoDialog = void 0;

var c = _interopRequireWildcard(require("lib/constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var newTodoDialog = function newTodoDialog() {
  return {
    type: c.TODO_NEW_DIALOG
  };
};

exports.newTodoDialog = newTodoDialog;

var newTodoCancel = function newTodoCancel() {
  return {
    type: c.TODO_NEW_CANCEL
  };
};

exports.newTodoCancel = newTodoCancel;

var newTodoSubmit = function newTodoSubmit() {
  var action = c.SETTINGS_NEW_TODO_CONFIRM ? c.TODO_NEW_SUBMIT : c.TODO_NEW_CONFIRM_SUBMIT;
  return {
    type: action
  };
};

exports.newTodoSubmit = newTodoSubmit;

var newTodoPartialData = function newTodoPartialData(_ref) {
  var text = _ref.data.text;
  return {
    type: c.TODO_NEW_PARTIAL_SAVE,
    text: text
  };
};

exports.newTodoPartialData = newTodoPartialData;

var newTodoConfirmCancel = function newTodoConfirmCancel() {
  return {
    type: c.TODO_NEW_CONFIRM_CANCEL
  };
};

exports.newTodoConfirmCancel = newTodoConfirmCancel;

var newTodoConfirmSubmit = function newTodoConfirmSubmit() {
  return {
    type: c.TODO_NEW_CONFIRM_SUBMIT
  };
};

exports.newTodoConfirmSubmit = newTodoConfirmSubmit;

var taskVisible = function taskVisible(_ref2) {
  var id = _ref2.data.id;
  return {
    type: c.TASK_VISIBLE,
    id: id
  };
};

exports.taskVisible = taskVisible;

var openTodoDetails = function openTodoDetails(_ref3) {
  var id = _ref3.data.id;
  return {
    type: c.TODO_DETAILS,
    visible: true,
    id: id
  };
};

exports.openTodoDetails = openTodoDetails;

var closeTodoDetails = function closeTodoDetails(_ref4) {
  var id = _ref4.data.id;
  return {
    type: c.TODO_DETAILS,
    visible: false,
    id: id
  };
};

exports.closeTodoDetails = closeTodoDetails;

var deleteTodo = function deleteTodo(_ref5) {
  var id = _ref5.data.id;
  var action = c.SETTINGS_DELETE_TODO_CONFIRM ? c.TODO_DELETE_SUBMIT : c.TODO_DELETE_CONFIRM_SUBMIT;
  return {
    type: action,
    id: id
  };
};

exports.deleteTodo = deleteTodo;

var deleteTodoCancel = function deleteTodoCancel() {
  return {
    type: c.TODO_DELETE_CONFIRM_CANCEL
  };
};

exports.deleteTodoCancel = deleteTodoCancel;

var deleteToDoSubmit = function deleteToDoSubmit(_ref6) {
  var id = _ref6.data.id;
  return {
    type: c.TODO_DELETE_CONFIRM_SUBMIT,
    id: id
  };
};

exports.deleteToDoSubmit = deleteToDoSubmit;

var editTodoName = function editTodoName() {
  return {
    type: c.TODO_EDIT_NAME_DIALOG
  };
};

exports.editTodoName = editTodoName;

var editTodoNameCancel = function editTodoNameCancel() {
  return {
    type: c.TODO_EDIT_NAME_CANCEL
  };
};

exports.editTodoNameCancel = editTodoNameCancel;

var editTodoNameSubmit = function editTodoNameSubmit() {
  var action = c.SETTINGS_EDIT_TODO_CONFIRM ? c.TODO_EDIT_NAME_SUBMIT : c.TODO_EDIT_NAME_CONFIRM_SUBMIT;
  return {
    type: action
  };
};

exports.editTodoNameSubmit = editTodoNameSubmit;

var editTodoNamePartialData = function editTodoNamePartialData(_ref7) {
  var text = _ref7.data.text;
  return {
    type: c.TODO_EDIT_NAME_PARTIAL_SAVE,
    text: text
  };
};

exports.editTodoNamePartialData = editTodoNamePartialData;

var editTodoNameConfirmCancel = function editTodoNameConfirmCancel() {
  return {
    type: c.TODO_EDIT_NAME_CONFIRM_CANCEL
  };
};

exports.editTodoNameConfirmCancel = editTodoNameConfirmCancel;

var editTodoNameConfirmSubmit = function editTodoNameConfirmSubmit() {
  return {
    type: c.TODO_EDIT_NAME_CONFIRM_SUBMIT
  };
};

exports.editTodoNameConfirmSubmit = editTodoNameConfirmSubmit;

var deleteTask = function deleteTask(_ref8) {
  var id = _ref8.data.id;
  var action = c.SETTINGS_TASK_DELETE_CONFIRM ? c.TASK_DELETE_SUBMIT : c.TASK_DELETE_CONFIRM_SUBMIT;
  return {
    type: action,
    id: id
  };
};

exports.deleteTask = deleteTask;

var deleteTaskConfirmCanCel = function deleteTaskConfirmCanCel() {
  return {
    type: c.TASK_DELETE_CONFIRM_CANCEL
  };
};

exports.deleteTaskConfirmCanCel = deleteTaskConfirmCanCel;

var deleteTaskConfirmSubmit = function deleteTaskConfirmSubmit(_ref9) {
  var id = _ref9.data.id;
  return {
    type: c.TASK_DELETE_CONFIRM_SUBMIT,
    id: id
  };
};

exports.deleteTaskConfirmSubmit = deleteTaskConfirmSubmit;

var editTaskName = function editTaskName(_ref10) {
  var id = _ref10.data.id;
  return {
    type: c.TASK_EDIT_NAME_DIALOG,
    id: id
  };
};

exports.editTaskName = editTaskName;

var editTaskNameCancel = function editTaskNameCancel() {
  return {
    type: c.TASK_EDIT_NAME_CANCEL
  };
};

exports.editTaskNameCancel = editTaskNameCancel;

var editTaskNameSubmit = function editTaskNameSubmit() {
  var action = c.SETTINGS_TASK_EDIT_CONFIRM ? c.TASK_EDIT_NAME_SUBMIT : c.TASK_EDIT_NAME_CONFIRM_SUBMIT;
  return {
    type: action
  };
};

exports.editTaskNameSubmit = editTaskNameSubmit;

var editTaskNamePartialData = function editTaskNamePartialData(_ref11) {
  var text = _ref11.data.text;
  return {
    type: c.TASK_EDIT_NAME_PARTIAL_SAVE,
    text: text
  };
};

exports.editTaskNamePartialData = editTaskNamePartialData;

var editTaskNameConfirmCancel = function editTaskNameConfirmCancel() {
  return {
    type: c.TASK_EDIT_NAME_CONFIRM_CANCEL
  };
};

exports.editTaskNameConfirmCancel = editTaskNameConfirmCancel;

var editTaskNameConfirmSubmit = function editTaskNameConfirmSubmit() {
  return {
    type: c.TASK_EDIT_NAME_CONFIRM_SUBMIT
  };
};

exports.editTaskNameConfirmSubmit = editTaskNameConfirmSubmit;

var checkTask = function checkTask(_ref12) {
  var id = _ref12.data.id;
  var action = c.SETTINGS_TASK_CHECK_CONFIRM ? c.TASK_CHECK_SUBMIT : c.TASK_CHECK_CONFIRM_SUBMIT;
  return {
    type: action,
    id: id
  };
};

exports.checkTask = checkTask;

var checkTaskConfirmCancel = function checkTaskConfirmCancel() {
  return {
    type: c.TASK_CHECK_CONFIRM_CANCEL
  };
};

exports.checkTaskConfirmCancel = checkTaskConfirmCancel;

var checkTaskConfirmSubmit = function checkTaskConfirmSubmit(_ref13) {
  var id = _ref13.data.id;
  return {
    type: c.TASK_CHECK_CONFIRM_SUBMIT,
    id: id
  };
};

exports.checkTaskConfirmSubmit = checkTaskConfirmSubmit;

var newTask = function newTask() {
  return {
    type: c.TASK_NEW_DIALOG
  };
};

exports.newTask = newTask;

var newTaskCancel = function newTaskCancel() {
  return {
    type: c.TASK_NEW_CANCEL
  };
};

exports.newTaskCancel = newTaskCancel;

var newTaskSubmit = function newTaskSubmit() {
  var action = c.SETTINGS_NEW_TASK_CONFIRM ? c.TASK_NEW_SUBMIT : c.TASK_NEW_CONFIRM_SUBMIT;
  return {
    type: action
  };
};

exports.newTaskSubmit = newTaskSubmit;

var newTaskPartialData = function newTaskPartialData(_ref14) {
  var text = _ref14.data.text;
  return {
    type: c.TASK_NEW_PARTIAL_SAVE,
    text: text
  };
};

exports.newTaskPartialData = newTaskPartialData;

var newTaskConfirmCancel = function newTaskConfirmCancel() {
  return {
    type: c.TASK_NEW_CONFIRM_CANCEL
  };
};

exports.newTaskConfirmCancel = newTaskConfirmCancel;

var newTaskConfirmSubmit = function newTaskConfirmSubmit() {
  return {
    type: c.TASK_NEW_CONFIRM_SUBMIT
  };
};

exports.newTaskConfirmSubmit = newTaskConfirmSubmit;