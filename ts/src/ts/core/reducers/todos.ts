/* eslint-disable babel/camelcase */
import * as c from '../../lib/constants';
import {actionType, initType, taskType, todoType,} from '../../lib/types';
import {randomString} from '../../lib/utils';

function todos(state: initType, action: actionType) {
    const newState = JSON.parse(JSON.stringify(state));
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
            id: randomString(15),
            todoName: newState.activity.newTodoPartialData,
            tasks: [],
            isExpanded: false,
        });
        newState.activity.newTodoPartialData = '';
        newState.activity.newTodoShowDialog = false;
        newState.activity.newTodoShowConfirm = false;
        return newState;

    case c.TASK_VISIBLE:
        newState.todos.some((item: todoType) => item.id == action.id ? item.isExpanded = !item.isExpanded : null);
        return newState;

    case c.TODO_DETAILS:
        newState.todos.some((item: todoType) => item.id == action.id ? item.editDialogVisible = action.visible !== undefined ? action.visible : false : null);
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
        newState.todos = newState.todos.filter((item: todoType) => item.id != action.id);
        newState.activity.deleteTodoShowConfirm = false;
        newState.activity.deleteTodoTodoId = '';
        return newState;

    case c.TODO_EDIT_NAME_DIALOG:
        newState.activity.detailsEditNameShowDialog = true;
        newState.activity.detailsEditNamePartialData = newState.todos.find((item: todoType) => item.id == newState.activity.detailsTodoId ? item : null).todoName;
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
        newState.todos.some((item: todoType) => item.id == newState.activity.detailsTodoId ? item.todoName = newState.activity.detailsEditNamePartialData : null);
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
        newState.todos.some((item: todoType) => item.id == newState.activity.detailsTodoId ? item.tasks = item.tasks.filter((subItem: taskType) => subItem.id != action.id) : null);
        newState.activity.detailsDeleteTaskShowConfirm = false;
        newState.activity.detailsDeleteTaskTaskId = '';
        return newState;

    case c.TASK_EDIT_NAME_DIALOG:
        newState.activity.detailsEditTaskShowDialog = true;
        newState.activity.detailsEditTaskTaskId = action.id;
        newState.activity.detailsEditTaskPartialData = newState.todos.find((item: todoType) => item.id == newState.activity.detailsTodoId).tasks.find((subItem: taskType) => subItem.id == action.id ? subItem : null).taskName;
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
        newState.todos.some((item: todoType) => item.id == newState.activity.detailsTodoId ? item.tasks.some((subItem: taskType) => subItem.id == newState.activity.detailsEditTaskTaskId ? subItem.taskName = newState.activity.detailsEditTaskPartialData : null) : null);
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
        newState.todos.some((item: todoType) => item.id == newState.activity.detailsTodoId ? item.tasks.some((subItem: taskType) => subItem.id == action.id ? subItem.isDone = !subItem.isDone : null) : null);
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
        newState.todos.some((item: todoType) => item.id == newState.activity.detailsTodoId ? item.tasks.push({
            id: randomString(20),
            taskName: newState.activity.newTaskPartialData,
            isDone: false,

        }) : null);
        newState.activity.newTaskPartialData = '';
        newState.activity.newTaskShowDialog = false;
        newState.activity.newTaskShowConfirm = false;
        return newState;

    default:
        return newState;
    }
}

export default todos;
