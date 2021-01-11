import React from 'react';

import ItemTodoInModal from '../simple/itemTodoInModal';
import ButtonNewTask from '../simple/buttonNewTask';
import NewTask from '../simple/newTask';
import TaskListInModal from '../complex/taskListInModal';
import {itemTodoInModalType, newTaskType, taskListInModalType, todoType} from '../../lib/types';

type detailTodoType = {
    item: todoType,
    itemTodoInModal: itemTodoInModalType,
    onNewTask: Function,
    newTask: newTaskType,
    taskListInModal: taskListInModalType,
}

export default (props: detailTodoType) => {
    return (
        <div key={props.item.id}>
            <ItemTodoInModal {...props.itemTodoInModal} item={props.item} />
            <ButtonNewTask onClick={props.onNewTask} id={props.item.id} />
            <NewTask {...props.newTask} />
            <TaskListInModal {...props.taskListInModal} item={props.item} />
        </div>
    );
};
