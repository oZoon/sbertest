export type textType = {
    data: {
        text: string,
    }
}
export type idType = {
    data: {
        id: string,
    }
}
export type taskType = {
    id: string,
    taskName: string,
    isDone: boolean,
}
export type todoType = {
    id: string,
    todoName: string,
    tasks: taskType[],
    isExpanded: boolean,
    editDialogVisible: boolean,
}
export type activityType = {
    newTodoShowDialog: boolean,
    newTodoPartialData: string,
    newTodoShowConfirm: boolean,
    deleteTodoTodoId: string,
    deleteTodoShowConfirm: boolean,
    newTaskShowDialog: boolean,
    newTaskPartialData: string,
    newTaskShowConfirm: boolean,
    detailsTodoId: string,
    detailsEditNameShowDialog: boolean,
    detailsEditNamePartialData: string,
    detailsEditNameShowConfirm: boolean,
    detailsDeleteTaskTaskId: string,
    detailsDeleteTaskShowConfirm: boolean,
    detailsEditTaskShowDialog: boolean,
    detailsEditTaskPartialData: string,
    detailsEditTaskTaskId: string,
    detailsEditTaskShowConfirm: boolean,
    detailsCheckTaskTaskId: string,
    detailsCheckTaskShowConfirm: boolean,
}
export type initType = {
    todos: todoType[],
    activity: activityType,
}
export type actionType = {
    type: string,
    id?: string,
    text?: string,
    visible?: boolean,
}
export type appPropsType = {
    state: initType,

    onNewTodoDialog: Function,
    onNewTodoCancel: Function,
    onNewTodoSubmit: Function,
    onNewTodoPartialData: Function,
    onNewTodoConfirmCancel: Function,
    onNewTodoConfirmSubmit: Function,

    onTaskVisible: Function,

    onOpenTodoDetails: Function,
    onCloseTodoDetails: Function,

    onDeleteTodo: Function,
    onDeleteTodoCancel: Function,
    onDeleteToDoSubmit: Function,

    onEditTodoName: Function,
    onEditTodoNameCancel: Function,
    onEditTodoNameSubmit: Function,
    onEditTodoNamePartialData: Function,
    onEditTodoNameConfirmCancel: Function,
    onEditTodoNameConfirmSubmit: Function,

    onEditTaskName: Function,
    onEditTaskNameCancel: Function,
    onEditTaskNameSubmit: Function,
    onEditTaskNamePartialData: Function,
    onEditTaskNameConfirmCancel: Function,
    onEditTaskNameConfirmSubmit: Function,

    onDeleteTask: Function,
    onDeleteTaskConfirmCanCel: Function,
    onDeleteTaskConfirmSubmit: Function,

    onCheckTask: Function,
    onCheckTaskConfirmCancel: Function,
    onCheckTaskConfirmSubmit: Function,

    onNewTask: Function,
    onNewTaskCancel: Function,
    onNewTaskSubmit: Function,
    onNewTaskPartialData: Function,
    onNewTaskConfirmCancel: Function,
    onNewTaskConfirmSubmit: Function,
    onSave: Function,
}

export type modalCheckTaskConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submitName: string,
    submit: boolean,
    onSubmit: Function,
};
export type modalTaskEditType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
};
export type inputTaskEditType = { // +
    id: string,
    onPartialSave: Function,
    partialData: string,
    onSave: Function,
};
export type modalTaskEditConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submitName: string,
    submit: boolean,
    onSubmit: Function,
};
export type modalTaskEditConfirmContentType = string; // +
export type modalTaskDeleteConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submitName: string,
    submit: boolean,
    onSubmit: Function,
};
export type modalEditTodoType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
};
export type inputEditTodoType = { // +
    // title: string,
    // isOpen: boolean,
    // zIndex: number,
    // cancelName: string,
    // onCancel: Function,
    // submit: boolean,
    // submitName: string,
    // onSubmit: Function,

    id: string,
    onPartialSave: Function,
    partialData: string,
    onSave: Function,
}
export type modalEditTodoConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
};
export type modalEditTodoConfirmContentType = string; // +
export type modalNewTaskType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
    disabled: boolean,
};
export type inputNewTaskType = { // +
    id: string,
    onPartialSave: Function,
    partialData: string,
    onSave: Function,
}
export type newTaskConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
}
export type itemTaskInModalType = { // + // in own file
    activity: activityType,
    onCheckTask: Function,
    modalCheckTaskConfirm: modalCheckTaskConfirmType, // +
    onEditTaskName: Function,
    modalTaskEdit: modalTaskEditType, // +
    inputTaskEdit: inputTaskEditType, // +
    modalTaskEditConfirm: modalTaskEditConfirmType, // +
    modalTaskEditConfirmContent: modalTaskEditConfirmContentType, // +
    onDeleteTask: Function,
    modalTaskDeleteConfirm: modalTaskDeleteConfirmType, // +
}
export type itemTodoInModalType = { // + // in own file
    onEditTodoName: Function,
    modalEditTodo: modalEditTodoType, // +
    inputEditTodo: inputEditTodoType, // +
    modalEditTodoConfirm: modalEditTodoConfirmType, // +
    modalEditTodoConfirmContent: modalEditTodoConfirmContentType, // +
}
export type newTaskType = { // +
    activity: activityType,
    modalNewTask: modalNewTaskType, // +
    inputNewTask: inputNewTaskType, // +
    newTaskConfirm: newTaskConfirmType, // +
}
export type taskListInModalType = { // + // in own file
    itemTaskInModal: itemTaskInModalType, // +
}
export type detailTodoType = { // + // in own file
    itemTodoInModal: itemTodoInModalType, // +
    onNewTask: Function,
    newTask: newTaskType, // +
    taskListInModal: taskListInModalType, // +
}
export type newTodoConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
}
export type inputNewTodoType = { // +
    id: string,
    onPartialSave: Function,
    partialData: string,
    onSave: Function,
}
export type modalNewTodoType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submit: boolean,
    submitName: string,
    onSubmit: Function,
    disabled: boolean,
}
export type modalDetailTodoType = { // +
    title: string,
    width: string,
    minHeight: string,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
};
export type deleteTodoConfirmType = { // +
    title: string,
    isOpen: boolean,
    zIndex: number,
    cancelName: string,
    onCancel: Function,
    submitName: string,
    submit: boolean,
    onSubmit: Function,
}
export type activityTodoListType = { // +
    deleteTodoTodoId: string,
    detailsTodoId: string,
}
export type itemTodoType = { // +
    onTaskVisible: Function,
    onOpenTodoDetails: Function,
    onDeleteTodo: Function,
}
export type itemTodoTypeExtend = { // +
    isExpanded: boolean,
    itemId: string,
    content: string,
    onTaskVisible: Function,
    onOpenTodoDetails: Function,
    onDeleteTodo: Function,
}
export type newTodoType = { // +
    modalNewTodo: modalNewTodoType, // +
    inputNewTodo: inputNewTodoType, // +
    newTodoConfirm: newTodoConfirmType, // +
}
export type todoListType = { // + // in own file
    todos: todoType[], // +
    itemTodo: itemTodoType, // +
    activityTodoList: activityTodoListType, // +
    deleteTodoConfirm: deleteTodoConfirmType, // +
    modalDetailTodo: modalDetailTodoType, // +
    detailTodo: detailTodoType, // +
};
export type contentType = {
    onNewTodoDialog: Function, // +
    todoList: todoListType, // +
    newTodo: newTodoType, // +
}
