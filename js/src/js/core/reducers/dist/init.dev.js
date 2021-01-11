"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("lib/constants");

var _phrases = require("lib/phrases");

var _records = _interopRequireDefault(require("lib/records"));

var _utils = require("lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var init = {
  todos: Array(_phrases.todo.length).fill({
    id: '',
    todoName: '',
    tasks: [],
    isExpanded: true,
    editDialogVisible: false
  }).map(function (item, index) {
    return {
      id: (0, _utils.randomString)(15),
      todoName: _phrases.todo[index],
      tasks: Array((0, _utils.generatorNumber)(_constants.COUNT_TASK)).fill({
        id: '',
        taskName: '',
        isDone: false
      }).map(function () {
        return {
          id: (0, _utils.randomString)(20),
          taskName: _phrases.tasks[index][(0, _utils.generatorNumber)([0, _phrases.tasks[index].length - 1])],
          isDone: false
        };
      }),
      isExpanded: false,
      editDialogVisible: false
    };
  }),
  activity: {
    newTodoShowDialog: false,
    newTodoPartialData: '',
    newTodoShowConfirm: false,
    deleteTodoTodoId: '',
    deleteTodoShowConfirm: false,
    newTaskShowDialog: false,
    newTaskPartialData: '',
    newTaskShowConfirm: false,
    detailsTodoId: '',
    detailsEditNameShowDialog: false,
    detailsEditNamePartialData: '',
    detailsEditNameShowConfirm: false,
    detailsDeleteTaskTaskId: '',
    detailsDeleteTaskShowConfirm: false,
    detailsEditTaskShowDialog: false,
    detailsEditTaskPartialData: '',
    detailsEditTaskTaskId: '',
    detailsEditTaskShowConfirm: false,
    detailsCheckTaskTaskId: '',
    detailsCheckTaskShowConfirm: false
  }
};
var records = new _records["default"]();
var initLocalStorage = records.getRecord("sber-".concat(_constants.VERSION));

if (initLocalStorage !== null && initLocalStorage.todos.length != 0) {
  init = initLocalStorage;
}

records.setRecord("sber-".concat(_constants.VERSION), init);
var _default = init;
exports["default"] = _default;