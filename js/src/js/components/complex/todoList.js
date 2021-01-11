import React from 'react';

import Modal from 'components/so-simple/modal';
import ItemTodo from 'components/simple/itemTodo';
import TaskList from 'components/complex/taskList';
import DetailTodo from 'components/complex/detailTodo';

import { SETTINGS_DELETE_TODO_CONFIRM } from 'lib/constants';

export default (props) => {
    // todos
    // itemTodo
    // activityTodoList
    // deleteTodoConfirm
    // modalDetailTodo
    // detailTodo
    return (
        <div className="content__show-todo__list">
            {props.todos.map(item => {
                return (
                    <div key={item.id}>
                        <div className="content__show-todo__item">
                            <ItemTodo
                                isExpanded={item.isExpanded}
                                itemId={item.id}
                                content={item.todoName}
                                {...props.itemTodo}
                            />
                            {
                                SETTINGS_DELETE_TODO_CONFIRM &&
                                props.activityTodoList.deleteTodoTodoId == item.id &&
                                <Modal
                                    {...props.deleteTodoConfirm}
                                    itemId={item.id}
                                >
                                    Удаление заметки: {item.todoName}
                                </Modal>
                            }
                        </div>
                        <div style={item.isExpanded ? { display: 'block' } : { display: 'none' }}>
                            <TaskList tasks={item.tasks} />
                        </div>
                        <div style={props.activityTodoList.detailsTodoId == item.id ? { display: 'block' } : { display: 'none' }}>
                            <Modal
                                {...props.modalDetailTodo}
                                isOpen={item.editDialogVisible}
                                itemId={item.id}
                            >
                                <DetailTodo
                                    {...props.detailTodo}
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
