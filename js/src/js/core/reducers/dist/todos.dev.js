"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var c = _interopRequireWildcard(require("lib/constants"));

var _utils = require("lib/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function todos(state, action) {
  var newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case c.TODO_NEW_DIALOG:
      newState.activity.newTodoShowDialog = true;
      newState.activity.newTodoPartialData = '';
      return newState;

    case c.TODO_NEW_PARTIAL_SAVE:
      newState.activity.newTodoPartialData = action.text;
      return newState;

    case c.TODO_NEW_CANCEL:
      newState.activity.newTodoShowDialog = false;
      newState.activity.newTodoPartialData = '';
      return newState;

    case c.TODO_NEW_SUBMIT:
      newState.activity.newTodoShowConfirm = true;
      return newState;

    case c.TODO_NEW_CONFIRM_CANCEL:
      newState.activity.newTodoShowConfirm = false;
      return newState;

    case c.TODO_NEW_CONFIRM_SUBMIT:
      newState.todos.push({
        id: (0, _utils.randomString)(15),
        todoName: newState.activity.newTodoPartialData,
        tasks: [],
        isExpanded: false
      });
      newState.activity.newTodoPartialData = '';
      newState.activity.newTodoShowDialog = false;
      newState.activity.newTodoShowConfirm = false;
      return newState;

    case c.TASK_VISIBLE:
      newState.todos.some(function (item) {
        return item.id == action.id ? item.isExpanded = !item.isExpanded : null;
      });
      return newState;

    case c.TODO_DETAILS:
      newState.todos.some(function (item) {
        return item.id == action.id ? item.editDialogVisible = action.visible : null;
      });
      newState.activity.detailsTodoId = action.visible ? action.id : '';
      return newState;

    case c.TODO_DELETE_SUBMIT:
      newState.activity.deleteTodoShowConfirm = true;
      newState.activity.deleteTodoTodoId = action.id;
      return newState;

    case c.TODO_DELETE_CONFIRM_CANCEL:
      newState.activity.deleteTodoShowConfirm = false;
      newState.activity.deleteTodoTodoId = '';
      return newState;

    case c.TODO_DELETE_CONFIRM_SUBMIT:
      newState.todos = newState.todos.filter(function (item) {
        return item.id != action.id;
      });
      newState.activity.deleteTodoShowConfirm = false;
      newState.activity.deleteTodoTodoId = '';
      return newState;

    case c.TODO_EDIT_NAME_DIALOG:
      newState.activity.detailsEditNameShowDialog = true;
      newState.activity.detailsEditNamePartialData = newState.todos.find(function (item) {
        return item.id == newState.activity.detailsTodoId ? item : null;
      }).todoName;
      return newState;

    case c.TODO_EDIT_NAME_PARTIAL_SAVE:
      newState.activity.detailsEditNamePartialData = action.text;
      return newState;

    case c.TODO_EDIT_NAME_CANCEL:
      newState.activity.detailsEditNameShowDialog = false;
      newState.activity.detailsEditNamePartialData = '';
      return newState;

    case c.TODO_EDIT_NAME_SUBMIT:
      newState.activity.detailsEditNameShowConfirm = true;
      return newState;

    case c.TODO_EDIT_NAME_CONFIRM_CANCEL:
      newState.activity.detailsEditNameShowConfirm = false;
      return newState;

    case c.TODO_EDIT_NAME_CONFIRM_SUBMIT:
      newState.activity.detailsEditNameShowConfirm = false;
      newState.activity.detailsEditNameShowDialog = false;
      newState.todos.some(function (item) {
        return item.id == newState.activity.detailsTodoId ? item.todoName = newState.activity.detailsEditNamePartialData : null;
      });
      newState.activity.detailsEditNamePartialData = '';
      return newState;

    case c.TASK_DELETE_SUBMIT:
      newState.activity.detailsDeleteTaskShowConfirm = true;
      newState.activity.detailsDeleteTaskTaskId = action.id;
      return newState;

    case c.TASK_DELETE_CONFIRM_CANCEL:
      newState.activity.detailsDeleteTaskShowConfirm = false;
      newState.activity.detailsDeleteTaskTaskId = '';
      return newState;

    case c.TASK_DELETE_CONFIRM_SUBMIT:
      newState.todos.some(function (item) {
        return item.id == newState.activity.detailsTodoId ? item.tasks = item.tasks.filter(function (subItem) {
          return subItem.id != action.id;
        }) : null;
      });
      newState.activity.detailsDeleteTaskShowConfirm = false;
      newState.activity.detailsDeleteTaskTaskId = '';
      return newState;

    case c.TASK_EDIT_NAME_DIALOG:
      newState.activity.detailsEditTaskShowDialog = true;
      newState.activity.detailsEditTaskTaskId = action.id;
      newState.activity.detailsEditTaskPartialData = newState.todos.find(function (item) {
        return item.id == newState.activity.detailsTodoId;
      }).tasks.find(function (subItem) {
        return subItem.id == action.id ? subItem : null;
      }).taskName;
      return newState;

    case c.TASK_EDIT_NAME_CANCEL:
      newState.activity.detailsEditTaskShowDialog = false;
      newState.activity.detailsEditTaskTaskId = '';
      newState.activity.detailsEditTaskPartialData = '';
      return newState;

    case c.TASK_EDIT_NAME_SUBMIT:
      newState.activity.detailsEditTaskShowConfirm = true;
      return newState;

    case c.TASK_EDIT_NAME_PARTIAL_SAVE:
      newState.activity.detailsEditTaskPartialData = action.text;
      return newState;

    case c.TASK_EDIT_NAME_CONFIRM_CANCEL:
      newState.activity.detailsEditTaskShowConfirm = false;
      return newState;

    case c.TASK_EDIT_NAME_CONFIRM_SUBMIT:
      newState.activity.detailsEditTaskShowConfirm = false;
      newState.activity.detailsEditTaskShowDialog = false;
      newState.todos.some(function (item) {
        return item.id == newState.activity.detailsTodoId ? item.tasks.some(function (subItem) {
          return subItem.id == newState.activity.detailsEditTaskTaskId ? subItem.taskName = newState.activity.detailsEditTaskPartialData : null;
        }) : null;
      });
      newState.activity.detailsEditTaskPartialData = '';
      return newState;

    case c.TASK_CHECK_SUBMIT:
      newState.activity.detailsCheckTaskShowConfirm = true;
      newState.activity.detailsCheckTaskTaskId = action.id;
      return newState;

    case c.TASK_CHECK_CONFIRM_CANCEL:
      newState.activity.detailsCheckTaskShowConfirm = false;
      newState.activity.detailsCheckTaskTaskId = '';
      return newState;

    case c.TASK_CHECK_CONFIRM_SUBMIT:
      newState.todos.some(function (item) {
        return item.id == newState.activity.detailsTodoId ? item.tasks.some(function (subItem) {
          return subItem.id == action.id ? subItem.isDone = !subItem.isDone : null;
        }) : null;
      });
      newState.activity.detailsCheckTaskShowConfirm = false;
      newState.activity.detailsCheckTaskTaskId = '';
      return newState;

    case c.TASK_NEW_DIALOG:
      newState.activity.newTaskShowDialog = true;
      newState.activity.newTaskPartialData = '';
      return newState;

    case c.TASK_NEW_PARTIAL_SAVE:
      newState.activity.newTaskPartialData = action.text;
      return newState;

    case c.TASK_NEW_CANCEL:
      newState.activity.newTaskShowDialog = false;
      newState.activity.newTaskPartialData = '';
      return newState;

    case c.TASK_NEW_SUBMIT:
      newState.activity.newTaskShowConfirm = true;
      return newState;

    case c.TASK_NEW_CONFIRM_CANCEL:
      newState.activity.newTaskShowConfirm = false;
      return newState;

    case c.TASK_NEW_CONFIRM_SUBMIT:
      newState.todos.some(function (item) {
        return item.id == newState.activity.detailsTodoId ? item.tasks.push({
          id: (0, _utils.randomString)(20),
          taskName: newState.activity.newTaskPartialData,
          isDone: false
        }) : null;
      });
      newState.activity.newTaskPartialData = '';
      newState.activity.newTaskShowDialog = false;
      newState.activity.newTaskShowConfirm = false;
      return newState;

    default:
      return newState;
  }
}

var _default = todos;
exports["default"] = _default;