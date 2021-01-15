import React from 'react';

import Modal from '../so-simple/modal';
import ItemTodo from '../simple/itemTodo';
import TaskList from '../complex/taskList';
import DetailTodo from '../complex/detailTodo';

import {SETTINGS_DELETE_TODO_CONFIRM} from '../../lib/constants';
import {todoType, itemTodoType, activityTodoListType, modalDetailTodoType, detailTodoType, deleteTodoConfirmType} from '../../lib/types';

type todoListType = {
    todos: todoType[],
    itemTodo: itemTodoType,
    activityTodoList: activityTodoListType,
    deleteTodoConfirm: deleteTodoConfirmType,
    modalDetailTodo: modalDetailTodoType,
    detailTodo: detailTodoType,
}

export default (props: todoListType) => {
    // console.log(props.modalDetailTodo);

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
                        <div style={item.isExpanded ? {display: 'block'} : {display: 'none'}}>
                            <TaskList tasks={item.tasks} />
                        </div>
                        {/* <div style={props.activityTodoList.detailsTodoId == item.id ? {display: 'block'} : {display: 'none'}}> */}
                        <Modal
                            {...props.modalDetailTodo}
                            isOpen={props.activityTodoList.detailsTodoId == item.id}
                            itemId={item.id}
                        >
                            <DetailTodo
                                {...props.detailTodo}
                                item={item}
                            />
                        </Modal>
                        {/* </div> */}
                    </div>
                );
            })}
        </div>
    );
};
