"use strict";
exports.__esModule = true;
var constants_1 = require("../../lib/constants");
var phrases_1 = require("../../lib/phrases");
var records_1 = require("../../lib/records");
var utils_1 = require("../../lib/utils");
var init = {
    todos: Array(phrases_1.todo.length)
        .fill({ id: '', todoName: '', tasks: [], isExpanded: true, editDialogVisible: false })
        .map(function (item, index) {
        return {
            id: utils_1.randomString(15),
            todoName: phrases_1.todo[index],
            tasks: Array(utils_1.generatorNumber(constants_1.COUNT_TASK))
                .fill({ id: '', taskName: '', isDone: false })
                .map(function () {
                return {
                    id: utils_1.randomString(20),
                    taskName: phrases_1.tasks[index][utils_1.generatorNumber([0, (phrases_1.tasks[index].length - 1)])],
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
var initLocalStorage = records_1["default"].getRecord("sber-" + constants_1.VERSION);
if (initLocalStorage !== null && initLocalStorage.todos.length != 0) {
    init = initLocalStorage;
}
records_1["default"].setRecord("sber-" + constants_1.VERSION, init);
exports["default"] = init;
