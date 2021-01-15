import * as c from '../../lib/constants';
import {idType, textType} from '../../lib/types';

export const newTodoDialog = () => {
    return {
        type: c.TODO_NEW_DIALOG,
    };
};
export const newTodoCancel = () => {
    return {
        type: c.TODO_NEW_CANCEL,
    };
};
export const newTodoSubmit = () => {
    const action = c.SETTINGS_NEW_TODO_CONFIRM ? c.TODO_NEW_SUBMIT : c.TODO_NEW_CONFIRM_SUBMIT;
    return {
        type: action,
    };
};
export const newTodoPartialData = ({data: {text}}: textType) => {
    return {
        type: c.TODO_NEW_PARTIAL_SAVE,
        text,
    };
};
export const newTodoConfirmCancel = () => {
    return {
        type: c.TODO_NEW_CONFIRM_CANCEL,
    };
};
export const newTodoConfirmSubmit = () => {
    return {
        type: c.TODO_NEW_CONFIRM_SUBMIT,
    };
};

export const taskVisible = ({data: {id}}: idType) => {
    return {
        type: c.TASK_VISIBLE,
        id,
    };
};

export const openTodoDetails = ({data: {id}}: idType) => {
    return {
        type: c.TODO_DETAILS,
        // visible: true,
        id,
    };
};
export const closeTodoDetails = () => {
    return {
        type: c.TODO_DETAILS,
        // visible: false,
        // id,
    };
};

export const deleteTodo = ({data: {id}}: idType) => {
    const action = c.SETTINGS_DELETE_TODO_CONFIRM ? c.TODO_DELETE_SUBMIT : c.TODO_DELETE_CONFIRM_SUBMIT;
    return {
        type: action,
        id,
    };
};
export const deleteTodoCancel = () => {
    return {
        type: c.TODO_DELETE_CONFIRM_CANCEL,
    };
};
export const deleteToDoSubmit = ({data: {id}}: idType) => {
    return {
        type: c.TODO_DELETE_CONFIRM_SUBMIT,
        id,
    };
};

export const editTodoName = () => {
    return {
        type: c.TODO_EDIT_NAME_DIALOG,
    };
};
export const editTodoNameCancel = () => {
    return {
        type: c.TODO_EDIT_NAME_CANCEL,
    };
};
export const editTodoNameSubmit = () => {
    const action = c.SETTINGS_EDIT_TODO_CONFIRM ? c.TODO_EDIT_NAME_SUBMIT : c.TODO_EDIT_NAME_CONFIRM_SUBMIT;
    return {
        type: action,
    };
};
export const editTodoNamePartialData = ({data: {text}}: textType) => {
    return {
        type: c.TODO_EDIT_NAME_PARTIAL_SAVE,
        text,
    };
};
export const editTodoNameConfirmCancel = () => {
    return {
        type: c.TODO_EDIT_NAME_CONFIRM_CANCEL,
    };
};
export const editTodoNameConfirmSubmit = () => {
    return {
        type: c.TODO_EDIT_NAME_CONFIRM_SUBMIT,
    };
};

export const deleteTask = ({data: {id}}: idType) => {
    const action = c.SETTINGS_TASK_DELETE_CONFIRM ? c.TASK_DELETE_SUBMIT : c.TASK_DELETE_CONFIRM_SUBMIT;
    return {
        type: action,
        id,
    };
};
export const deleteTaskConfirmCanCel = () => {
    return {
        type: c.TASK_DELETE_CONFIRM_CANCEL,
    };
};
export const deleteTaskConfirmSubmit = ({data: {id}}: idType) => {
    return {
        type: c.TASK_DELETE_CONFIRM_SUBMIT,
        id,
    };
};

export const editTaskName = ({data: {id}}: idType) => {
    return {
        type: c.TASK_EDIT_NAME_DIALOG,
        id,
    };
};
export const editTaskNameCancel = () => {
    return {
        type: c.TASK_EDIT_NAME_CANCEL,
    };
};
export const editTaskNameSubmit = () => {
    const action = c.SETTINGS_TASK_EDIT_CONFIRM ? c.TASK_EDIT_NAME_SUBMIT : c.TASK_EDIT_NAME_CONFIRM_SUBMIT;
    return {
        type: action,
    };
};
export const editTaskNamePartialData = ({data: {text}}: textType) => {
    return {
        type: c.TASK_EDIT_NAME_PARTIAL_SAVE,
        text,
    };
};
export const editTaskNameConfirmCancel = () => {
    return {
        type: c.TASK_EDIT_NAME_CONFIRM_CANCEL,
    };
};
export const editTaskNameConfirmSubmit = () => {
    return {
        type: c.TASK_EDIT_NAME_CONFIRM_SUBMIT,
    };
};

export const checkTask = ({data: {id}}: idType) => {
    const action = c.SETTINGS_TASK_CHECK_CONFIRM ? c.TASK_CHECK_SUBMIT : c.TASK_CHECK_CONFIRM_SUBMIT;
    return {
        type: action,
        id,
    };
};
export const checkTaskConfirmCancel = () => {
    return {
        type: c.TASK_CHECK_CONFIRM_CANCEL,
    };
};
export const checkTaskConfirmSubmit = ({data: {id}}: idType) => {
    return {
        type: c.TASK_CHECK_CONFIRM_SUBMIT,
        id,
    };
};

export const newTask = () => {
    return {
        type: c.TASK_NEW_DIALOG,
    };
};
export const newTaskCancel = () => {
    return {
        type: c.TASK_NEW_CANCEL,
    };
};
export const newTaskSubmit = () => {
    const action = c.SETTINGS_NEW_TASK_CONFIRM ? c.TASK_NEW_SUBMIT : c.TASK_NEW_CONFIRM_SUBMIT;
    return {
        type: action,
    };
};
export const newTaskPartialData = ({data: {text}}: textType) => {
    return {
        type: c.TASK_NEW_PARTIAL_SAVE,
        text
    };
};
export const newTaskConfirmCancel = () => {
    return {
        type: c.TASK_NEW_CONFIRM_CANCEL
    };
};
export const newTaskConfirmSubmit = () => {
    return {
        type: c.TASK_NEW_CONFIRM_SUBMIT,
    };
};
