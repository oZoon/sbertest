"use strict";
exports.__esModule = true;
exports.modalTodoDialog = exports.newTodoDialog = exports.separateProps = exports.Props = void 0;
/* eslint-disable babel/camelcase */
var constants_1 = require("./constants");
var Props = /** @class */ (function () {
    function Props(props) {
        this.props = props;
    }
    Props.prototype.get = function (key) {
        return this.props[key];
    };
    return Props;
}());
exports.Props = Props;
exports.separateProps = function (props) {
    var modalTaskDeleteConfirm = {
        title: 'всё правильно ?',
        isOpen: props.get('state').activity.details_DeleteTask_ShowConfirm,
        zIndex: '3',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onDeleteTaskConfirmCanCel'),
        submitName: 'ДА',
        submit: true,
        onSubmit: props.get('onDeleteTaskConfirmSubmit')
    };
    var modalTaskEditConfirmContent = props.get('state').activity.details_EditTask_PartialData;
    var modalTaskEditConfirm = {
        title: 'всё правильно ?',
        isOpen: props.get('state').activity.details_EditTask_ShowConfirm,
        zIndex: '3',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onEditTaskNameConfirmCancel'),
        submitName: 'ДА',
        submit: true,
        onSubmit: props.get('onEditTaskNameConfirmSubmit')
    };
    var inputTaskEdit = {
        id: 'editTaskName',
        type: 'text',
        onPartialSave: props.get('onEditTaskNamePartialData'),
        partialData: props.get('state').activity.details_EditTask_PartialData
    };
    var modalTaskEdit = {
        title: 'Редактирование названия задачи',
        isOpen: props.get('state').activity.details_EditTask_ShowDialog,
        zIndex: '3',
        cancel: true,
        onCancel: props.get('onEditTaskNameCancel'),
        submit: true,
        onSubmit: props.get('onEditTaskNameSubmit')
    };
    var modalCheckTaskConfirm = {
        title: 'всё правильно ?',
        isOpen: props.get('state').activity.details_CheckTask_ShowConfirm,
        zIndex: '3',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onCheckTaskConfirmCancel'),
        submitName: 'ДА',
        submit: true,
        onSubmit: props.get('onCheckTaskConfirmSubmit')
    };
    var detailTask = {
        activity: props.get('state').activity,
        onCheckTask: props.get('onCheckTask'),
        modalCheckTaskConfirm: modalCheckTaskConfirm,
        onEditTaskName: props.get('onEditTaskName'),
        modalTaskEdit: modalTaskEdit,
        inputTaskEdit: inputTaskEdit,
        modalTaskEditConfirm: modalTaskEditConfirm,
        modalTaskEditConfirmContent: modalTaskEditConfirmContent,
        onDeleteTask: props.get('onDeleteTask'),
        modalTaskDeleteConfirm: modalTaskDeleteConfirm
    };
    var newTaskDialogComponent = {
        activity: props.get('state').activity,
        onNewTaskCancel: props.get('onNewTaskCancel'),
        onNewTaskSubmit: props.get('onNewTaskSubmit'),
        onNewTaskPartialData: props.get('onNewTaskPartialData'),
        onNewTaskConfirmCancel: props.get('onNewTaskConfirmCancel'),
        onNewTaskConfirmSubmit: props.get('onNewTaskConfirmSubmit')
    };
    var modalEditTodoConfirmContent = props.get('state').activity.details_EditName_PartialData;
    var modalEditTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: props.get('state').activity.details_EditName_ShowConfirm,
        zIndex: '4',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onEditTodoNameConfirmCancel'),
        submit: true,
        submitName: 'ДА',
        onSubmit: props.get('onEditTodoNameConfirmSubmit')
    };
    var inputEditTodo = {
        id: 'editTodoName',
        type: 'text',
        onPartialSave: props.get('onEditTodoNamePartialData'),
        partialData: props.get('state').activity.details_EditName_PartialData
    };
    var modalEditTodo = {
        title: 'Редактирование названия заметки',
        isOpen: props.get('state').activity.details_EditName_ShowDialog,
        zIndex: '3',
        cancel: true,
        onCancel: props.get('onEditTodoNameCancel'),
        submit: true,
        onSubmit: props.get('onEditTodoNameSubmit')
    };
    var detailTodoName = {
        onEditTodoName: props.get('onEditTodoName'),
        modalEditTodo: modalEditTodo,
        inputEditTodo: inputEditTodo,
        modalEditTodoConfirm: modalEditTodoConfirm,
        modalEditTodoConfirmContent: modalEditTodoConfirmContent
    };
    var editTodo = {
        detailTodoName: detailTodoName,
        onNewTask: props.get('onNewTask'),
        newTaskDialogComponent: newTaskDialogComponent,
        detailTask: detailTask
    };
    var modalDetailTodo = {
        title: 'Детализация заметки',
        close: true,
        onClose: props.get('onCloseTodoDetails'),
        width: '800px',
        minHeight: 60 + constants_1.COUNT_TASK[1] * 50 + 20 + 62 + 90 + "px",
        zIndex: '2'
    };
    var modalDeleteTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: props.get('state').activity.deleteTodo_ShowConfirm,
        zIndex: '2',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onDeleteTodoCancel'),
        submitName: 'ДА',
        submit: true,
        onSubmit: props.get('onDeleteToDoSubmit')
    };
    var todoList = {
        todos: props.get('state').todos,
        activityTodoList: {
            idTodo: props.get('state').activity.idTodo,
            newTodo_ShowDialog: props.get('state').activity.newTodo_ShowDialog,
            deleteTodo_TodoId: props.get('state').activity.deleteTodo_TodoId,
            details_TodoId: props.get('state').activity.details_TodoId
        },
        modalDeleteTodoConfirm: modalDeleteTodoConfirm,
        modalDetailTodo: modalDetailTodo,
        onTaskVisible: props.get('onTaskVisible'),
        onOpenTodoDetails: props.get('onOpenTodoDetails'),
        onDeleteTodo: props.get('onDeleteTodo'),
        editTodo: editTodo
    };
    var modalTodoDialog = {
        isOpen: props.get('state').activity.newTodo_ShowDialog,
        zIndex: '2',
        cancel: true,
        onCancel: props.get('onNewTodoCancel'),
        submit: true,
        onSubmit: props.get('onNewTodoSubmit'),
        disabled: props.get('state').activity.newTodo_PartialData.length == 0 ? 'disabled' : null
    };
    var inputTodoDialog = {
        id: 'newTodo',
        type: 'text',
        onPartialSave: props.get('onNewTodoPartialData'),
        partialData: props.get('state').activity.newTodo_PartialData
    };
    var modalTodoDialogConfirm = {
        title: 'все правильно ?',
        isOpen: props.get('state').activity.newTodo_ShowConfirm,
        zIndex: '3',
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: props.get('onNewTodoConfirmCancel'),
        submit: true,
        submitName: 'ДА',
        onSubmit: props.get('onNewTodoConfirmSubmit')
    };
    // const newTodoDialog = {
    //     modalTodoDialog,
    //     inputTodoDialog,
    //     modalTodoDialogConfirm,
    // };
    return {
        onNewTodoDialog: props.get('onNewTodoDialog'),
        newTodoDialog: function (props) { },
        todoList: todoList
    };
};
exports.newTodoDialog = function (props) {
    return {
        modalTodoDialog: function (props) { },
        inputTodoDialog: function (props) { },
        modalTodoDialogConfirm: function (props) { }
    };
};
exports.modalTodoDialog = function (props) {
    return {
        isOpen: props.get('state').activity.newTodo_ShowDialog,
        zIndex: '2',
        cancel: true,
        onCancel: props.get('onNewTodoCancel'),
        submit: true,
        onSubmit: props.get('onNewTodoSubmit'),
        disabled: props.get('state').activity.newTodo_PartialData.length == 0 ? 'disabled' : null
    };
};
// const {
//         state,
//         onNewTodoDialog,
//         onNewTodoCancel,
//         onNewTodoSubmit,
//         onNewTodoPartialData,
//         onNewTodoConfirmCancel,
//         onNewTodoConfirmSubmit,
//         onTaskVisible,
//         onOpenTodoDetails,
//         onCloseTodoDetails,
//         onDeleteTodo,
//         onDeleteTodoCancel,
//         onDeleteToDoSubmit,
//         onEditTodoName,
//         onEditTodoNameCancel,
//         onEditTodoNameSubmit,
//         onEditTodoNamePartialData,
//         onEditTodoNameConfirmCancel,
//         onEditTodoNameConfirmSubmit,
//         onEditTaskName,
//         onEditTaskNameCancel,
//         onEditTaskNameSubmit,
//         onEditTaskNamePartialData,
//         onEditTaskNameConfirmCancel,
//         onEditTaskNameConfirmSubmit,
//         onDeleteTask,
//         onDeleteTaskConfirmCanCel,
//         onDeleteTaskConfirmSubmit,
//         onCheckTask,
//         onCheckTaskConfirmCancel,
//         onCheckTaskConfirmSubmit,
//         onNewTask,
//         onNewTaskCancel,
//         onNewTaskSubmit,
//         onNewTaskPartialData,
//         onNewTaskConfirmCancel,
//         onNewTaskConfirmSubmit,
//     } = props;
