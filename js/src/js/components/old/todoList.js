import React from 'react';

import Modal from 'components/simple/modal';
import TodoItem from 'components/todoItem';
import TaskItem from 'components/taskItem';
import EditTodo from 'components/editTodo';

import { SETTINGS_DELETE_TODO_CONFIRM } from 'lib/constants';

export default (props) => {
    const {
        todos,
        activityTodoList,
        modalDeleteTodoConfirm,
        modalDetailTodo,
        onTaskVisible,
        onOpenTodoDetails,
        onDeleteTodo,
        editTodo,
    } = props;
    return (
        <div className="content__show-todo__list">
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div className="content__show-todo__item">
                            <TodoItem
                                isExpanded={item.isExpanded}
                                itemId={item.id}
                                content={item.todoName}
                                onTaskVisible={onTaskVisible}
                                onOpenTodoDetails={onOpenTodoDetails}
                                onDeleteTodo={onDeleteTodo}
                            />
                            {
                                SETTINGS_DELETE_TODO_CONFIRM &&
                                activityTodoList.deleteTodoTodoId == item.id &&
                                <Modal
                                    {...modalDeleteTodoConfirm}
                                    itemId={item.id}
                                >
                                    Удаление заметки: {item.todoName}
                                </Modal>
                            }
                        </div>
                        <div style={item.isExpanded ? { display: 'block' } : { display: 'none' }}>
                            {item.tasks.map(subItem => <TaskItem
                                key={subItem.id}
                                isDone={subItem.isDone}
                                content={subItem.taskName}
                            />

                            )}
                        </div>
                        <div style={activityTodoList.detailsTodoId == item.id  ? { display: 'block' } : { display: 'none' }}>
                            <Modal
                                {...modalDetailTodo}
                                isOpen={item.editDialogVisible}
                                itemId={item.id}
                            >
                                <EditTodo
                                    {...editTodo}
                                    item={item}
                                />
                            </Modal>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
