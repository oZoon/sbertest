import { COUNT_TASK } from 'lib/constants';
export default props => {
    const {
        state,

        onNewTodoDialog,
        onNewTodoCancel,
        onNewTodoSubmit,
        onNewTodoPartialData,
        onNewTodoConfirmCancel,
        onNewTodoConfirmSubmit,

        onTaskVisible,

        onOpenTodoDetails,
        onCloseTodoDetails,

        onDeleteTodo,
        onDeleteTodoCancel,
        onDeleteToDoSubmit,

        onEditTodoName,
        onEditTodoNameCancel,
        onEditTodoNameSubmit,
        onEditTodoNamePartialData,
        onEditTodoNameConfirmCancel,
        onEditTodoNameConfirmSubmit,

        onEditTaskName,
        onEditTaskNameCancel,
        onEditTaskNameSubmit,
        onEditTaskNamePartialData,
        onEditTaskNameConfirmCancel,
        onEditTaskNameConfirmSubmit,

        onDeleteTask,
        onDeleteTaskConfirmCanCel,
        onDeleteTaskConfirmSubmit,

        onCheckTask,
        onCheckTaskConfirmCancel,
        onCheckTaskConfirmSubmit,

        onNewTask,
        onNewTaskCancel,
        onNewTaskSubmit,
        onNewTaskPartialData,
        onNewTaskConfirmCancel,
        onNewTaskConfirmSubmit,

    } = props;

    const modalTaskDeleteConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsDeleteTaskShowConfirm,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onDeleteTaskConfirmCanCel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onDeleteTaskConfirmSubmit,
    }
    const modalTaskEditConfirmContent = state.activity.detailsEditTaskPartialData;
    const modalTaskEditConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsEditTaskShowConfirm,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onEditTaskNameConfirmCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onEditTaskNameConfirmSubmit,
    }
    const inputTaskEdit = {
        id: 'editTaskName',
        onPartialSave: onEditTaskNamePartialData,
        partialData: state.activity.detailsEditTaskPartialData,
        onSave: onEditTaskNameSubmit,
    }
    const modalTaskEdit = {
        title: 'Редактирование названия задачи',
        isOpen: state.activity.detailsEditTaskShowDialog,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'Отменить',
        onCancel: onEditTaskNameCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onEditTaskNameSubmit,
        disabled: state.activity.detailsEditTaskPartialData.length == 0 ? true : false,
    }
    const modalCheckTaskConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsCheckTaskShowConfirm,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onCheckTaskConfirmCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onCheckTaskConfirmSubmit,
    }
    const itemTaskInModal = {
        activity: state.activity,
        onCheckTask,
        modalCheckTaskConfirm,
        onEditTaskName,
        modalTaskEdit,
        inputTaskEdit,
        modalTaskEditConfirm,
        modalTaskEditConfirmContent,
        onDeleteTask,
        modalTaskDeleteConfirm,
    }
    const taskListInModal = {
        itemTaskInModal,
    }
    const modalNewTask = {
        title: 'Новая задача',
        isOpen: state.activity.newTaskShowDialog,
        zIndex: Number('2'),
        cancel: true,
        cancelName: 'Отменить',
        onCancel: onNewTaskCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onNewTaskSubmit,
        disabled: state.activity.newTaskPartialData.length == 0 ? true : false
    }
    const inputNewTask = {
        id: 'newTask',
        onPartialSave: onNewTaskPartialData,
        partialData: state.activity.newTaskPartialData,
    }
    const newTaskConfirm = {
        title: 'все правильно ?',
        isOpen: state.activity.newTaskShowConfirm,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onNewTaskConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onNewTaskConfirmSubmit,
    }
    const newTask = {
        activity: state.activity,
        modalNewTask,
        inputNewTask,
        newTaskConfirm,
    }

    const modalEditTodoConfirmContent = state.activity.detailsEditNamePartialData;
    const modalEditTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.detailsEditNameShowConfirm,
        zIndex: Number('4'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onEditTodoNameConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onEditTodoNameConfirmSubmit,
    }
    const inputEditTodo = {
        id: 'editTodoName',
        onPartialSave: onEditTodoNamePartialData,
        partialData: state.activity.detailsEditNamePartialData,
        onSave: onEditTodoNameSubmit,
    }
    const modalEditTodo = {
        title: 'Редактирование названия заметки',
        isOpen: state.activity.detailsEditNameShowDialog,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'Отменить',
        onCancel: onEditTodoNameCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onEditTodoNameSubmit,
        disabled: state.activity.detailsEditNamePartialData.length == 0 ? true : false,
    }
    const itemTodoInModal = {
        onEditTodoName,
        modalEditTodo,
        inputEditTodo,
        modalEditTodoConfirm,
        modalEditTodoConfirmContent,
    }
    const detailTodo = {
        itemTodoInModal,
        onNewTask,
        newTask,
        taskListInModal,
    }

    const modalDetailTodo = {
        title: 'Детализация заметки',
        close: true,
        closeName: 'Закрыть',
        onClose: onCloseTodoDetails,
        width: '800px',
        minHeight: `${60 + COUNT_TASK[1] * 50 + 20 + 62 + 90}px`,
        zIndex: Number('2'),
    }
    const deleteTodoConfirm = {
        title: 'всё правильно ?',
        isOpen: state.activity.deleteTodoShowConfirm,
        zIndex: Number('2'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onDeleteTodoCancel,
        submitName: 'ДА',
        submit: true,
        onSubmit: onDeleteToDoSubmit,
    }
    const itemTodo = {
        onTaskVisible,
        onOpenTodoDetails,
        onDeleteTodo,
    }
    const todoList = {
        todos: state.todos,
        itemTodo,
        activityTodoList: {
            deleteTodoTodoId: state.activity.deleteTodoTodoId,
            detailsTodoId: state.activity.detailsTodoId,
        },
        deleteTodoConfirm,
        modalDetailTodo,
        detailTodo,
    }
    const modalNewTodo = {
        title: 'Новая заметка',
        isOpen: state.activity.newTodoShowDialog,
        zIndex: Number('2'),
        cancel: true,
        cancelName: 'Отменить',
        onCancel: onNewTodoCancel,
        submit: true,
        submitName: 'Сохранить',
        onSubmit: onNewTodoSubmit,
        disabled: state.activity.newTodoPartialData.length == 0 ? true : false,
    }
    const inputNewTodo = {
        id: 'newTodo',
        onPartialSave: onNewTodoPartialData,
        partialData: state.activity.newTodoPartialData,
        onSave: onNewTodoSubmit,
    }
    const newTodoConfirm = {
        title: 'все правильно ?',
        isOpen: state.activity.newTodoShowConfirm,
        zIndex: Number('3'),
        cancel: true,
        cancelName: 'НЕТ',
        onCancel: onNewTodoConfirmCancel,
        submit: true,
        submitName: 'ДА',
        onSubmit: onNewTodoConfirmSubmit,
    }
    const newTodo = {
        modalNewTodo,
        inputNewTodo,
        newTodoConfirm,
    }
    return {
        onNewTodoDialog,
        newTodo,
        todoList,
    }
}
