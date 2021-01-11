"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
exports["default"] = (function (props) {
    var state = props.state, onNewTodoDialog = props.onNewTodoDialog, onNewTodoCancel = props.onNewTodoCancel, onNewTodoSubmit = props.onNewTodoSubmit, onNewTodoPartialData = props.onNewTodoPartialData, onNewTodoConfirmCancel = props.onNewTodoConfirmCancel, onNewTodoConfirmSubmit = props.onNewTodoConfirmSubmit, onTaskVisible = props.onTaskVisible, onOpenTodoDetails = props.onOpenTodoDetails, onCloseTodoDetails = props.onCloseTodoDetails, onDeleteTodo = props.onDeleteTodo, onDeleteTodoCancel = props.onDeleteTodoCancel, onDeleteToDoSubmit = props.onDeleteToDoSubmit, onEditTodoName = props.onEditTodoName, onEditTodoNameCancel = props.onEditTodoNameCancel, onEditTodoNameSubmit = props.onEditTodoNameSubmit, onEditTodoNamePartialData = props.onEditTodoNamePartialData, onEditTodoNameConfirmCancel = props.onEditTodoNameConfirmCancel, onEditTodoNameConfirmSubmit = props.onEditTodoNameConfirmSubmit, onEditTaskName = props.onEditTaskName, onEditTaskNameCancel = props.onEditTaskNameCancel, onEditTaskNameSubmit = props.onEditTaskNameSubmit, onEditTaskNamePartialData = props.onEditTaskNamePartialData, onEditTaskNameConfirmCancel = props.onEditTaskNameConfirmCancel, onEditTaskNameConfirmSubmit = props.onEditTaskNameConfirmSubmit, onDeleteTask = props.onDeleteTask, onDeleteTaskConfirmCanCel = props.onDeleteTaskConfirmCanCel, onDeleteTaskConfirmSubmit = props.onDeleteTaskConfirmSubmit, onCheckTask = props.onCheckTask, onCheckTaskConfirmCancel = props.onCheckTaskConfirmCancel, onCheckTaskConfirmSubmit = props.onCheckTaskConfirmSubmit, onNewTask = props.onNewTask, onNewTaskCancel = props.onNewTaskCancel, onNewTaskSubmit = props.onNewTaskSubmit, onNewTaskPartialData = props.onNewTaskPartialData, onNewTaskConfirmCancel = props.onNewTaskConfirmCancel, onNewTaskConfirmSubmit = props.onNewTaskConfirmSubmit;
    var modalTaskDeleteConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsDeleteTaskShowConfirm,
        zIndex: Number('3'),
        cancelName: 'НЕТ',
        onCancel: onDeleteTaskConfirmCanCel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onDeleteTaskConfirmSubmit
    };
    var modalTaskEditConfirmContent = state.activity.detailsEditTaskPartialData;
    var modalTaskEditConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsEditTaskShowConfirm,
        zIndex: Number('3'),
        cancelName: 'НЕТ',
        onCancel: onEditTaskNameConfirmCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onEditTaskNameConfirmSubmit
    };
    var inputTaskEdit = {
        id: 'editTaskName',
        onPartialSave: onEditTaskNamePartialData,
        partialData: state.activity.detailsEditTaskPartialData,
        onSave: onEditTaskNameSubmit
    };
    var modalTaskEdit = {
        title: 'Редактирование названия задачи',
        isOpen: state.activity.detailsEditTaskShowDialog,
        zIndex: Number('3'),
        cancelName: 'Отменить',
        onCancel: onEditTaskNameCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onEditTaskNameSubmit,
        disabled: state.activity.detailsEditTaskPartialData.length == 0 ? true : false
    };
    var modalCheckTaskConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsCheckTaskShowConfirm,
        zIndex: Number('3'),
        cancelName: 'НЕТ',
        onCancel: onCheckTaskConfirmCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onCheckTaskConfirmSubmit
    };
    var itemTaskInModal = {
        activity: state.activity,
        onCheckTask: onCheckTask,
        modalCheckTaskConfirm: modalCheckTaskConfirm,
        onEditTaskName: onEditTaskName,
        modalTaskEdit: modalTaskEdit,
        inputTaskEdit: inputTaskEdit,
        modalTaskEditConfirm: modalTaskEditConfirm,
        modalTaskEditConfirmContent: modalTaskEditConfirmContent,
        onDeleteTask: onDeleteTask,
        modalTaskDeleteConfirm: modalTaskDeleteConfirm
    };
    var taskListInModal = {
        itemTaskInModal: itemTaskInModal
    };
    var modalNewTask = {
        title: 'Новая задача',
        isOpen: state.activity.newTaskShowDialog,
        zIndex: Number('2'),
        cancelName: 'Отменить',
        onCancel: onNewTaskCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onNewTaskSubmit,
        disabled: state.activity.newTaskPartialData.length == 0 ? true : false
    };
    var inputNewTask = {
        id: 'newTask',
        onPartialSave: onNewTaskPartialData,
        partialData: state.activity.newTaskPartialData,
        onSave: onNewTaskSubmit
    };
    var newTaskConfirm = {
        title: 'все правильно ?',
        isOpen: state.activity.newTaskShowConfirm,
        zIndex: Number('3'),
        cancelName: 'НЕТ',
        onCancel: onNewTaskConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onNewTaskConfirmSubmit
    };
    var newTask = {
        activity: state.activity,
        modalNewTask: modalNewTask,
        inputNewTask: inputNewTask,
        newTaskConfirm: newTaskConfirm
    };
    var modalEditTodoConfirmContent = state.activity.detailsEditNamePartialData;
    var modalEditTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsEditNameShowConfirm,
        zIndex: Number('4'),
        cancelName: 'НЕТ',
        onCancel: onEditTodoNameConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onEditTodoNameConfirmSubmit
    };
    var inputEditTodo = {
        id: 'editTodoName',
        onPartialSave: onEditTodoNamePartialData,
        partialData: state.activity.detailsEditNamePartialData,
        onSave: onEditTodoNameSubmit
    };
    var modalEditTodo = {
        title: 'Редактирование названия заметки',
        isOpen: state.activity.detailsEditNameShowDialog,
        zIndex: Number('3'),
        cancelName: 'Отменить',
        onCancel: onEditTodoNameCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onEditTodoNameSubmit,
        disabled: state.activity.detailsEditNamePartialData.length == 0 ? true : false
    };
    var itemTodoInModal = {
        onEditTodoName: onEditTodoName,
        modalEditTodo: modalEditTodo,
        inputEditTodo: inputEditTodo,
        modalEditTodoConfirm: modalEditTodoConfirm,
        modalEditTodoConfirmContent: modalEditTodoConfirmContent
    };
    var detailTodo = {
        itemTodoInModal: itemTodoInModal,
        onNewTask: onNewTask,
        newTask: newTask,
        taskListInModal: taskListInModal
    };
    var modalDetailTodo = {
        title: 'Детализация заметки',
        cancelName: 'Закрыть',
        onCancel: onCloseTodoDetails,
        width: '800px',
        minHeight: 60 + constants_1.COUNT_TASK[1] * 50 + 20 + 62 + 90 + "px",
        zIndex: Number('2')
    };
    var deleteTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.deleteTodoShowConfirm,
        zIndex: Number('2'),
        cancelName: 'НЕТ',
        onCancel: onDeleteTodoCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onDeleteToDoSubmit
    };
    var itemTodo = {
        onTaskVisible: onTaskVisible,
        onOpenTodoDetails: onOpenTodoDetails,
        onDeleteTodo: onDeleteTodo
    };
    var todoList = {
        todos: state.todos,
        itemTodo: itemTodo,
        activityTodoList: {
            deleteTodoTodoId: state.activity.deleteTodoTodoId,
            detailsTodoId: state.activity.detailsTodoId
        },
        deleteTodoConfirm: deleteTodoConfirm,
        modalDetailTodo: modalDetailTodo,
        detailTodo: detailTodo
    };
    var modalNewTodo = {
        title: 'Новая заметка',
        isOpen: state.activity.newTodoShowDialog,
        zIndex: Number('2'),
        cancelName: 'Отменить',
        onCancel: onNewTodoCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onNewTodoSubmit,
        disabled: state.activity.newTodoPartialData.length == 0 ? true : false
    };
    var inputNewTodo = {
        id: 'newTodo',
        onPartialSave: onNewTodoPartialData,
        partialData: state.activity.newTodoPartialData,
        onSave: onNewTodoSubmit
    };
    var newTodoConfirm = {
        title: 'все правильно ?',
        isOpen: state.activity.newTodoShowConfirm,
        zIndex: Number('3'),
        cancelName: 'НЕТ',
        onCancel: onNewTodoConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onNewTodoConfirmSubmit
    };
    var newTodo = {
        modalNewTodo: modalNewTodo,
        inputNewTodo: inputNewTodo,
        newTodoConfirm: newTodoConfirm
    };
    return {
        onNewTodoDialog: onNewTodoDialog,
        newTodo: newTodo,
        todoList: todoList
    };
});
