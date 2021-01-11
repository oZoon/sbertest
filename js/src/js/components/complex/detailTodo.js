import React from 'react';

import ItemTodoInModal from 'components/simple/itemTodoInModal';
import ButtonNewTask from 'components/simple/buttonNewTask';
import NewTask from 'components/simple/newTask';
import TaskListInModal from 'components/complex/taskListInModal';

export default (props) => {
    // item
    // itemTodoInModal
    // onNewTask
    // newTask
    // taskListInModal
    return (
        <div key={props.item.id}>
            <ItemTodoInModal {...props.itemTodoInModal} item={props.item} />
            <ButtonNewTask onClick={props.onNewTask} id={props.item.id} />
            <NewTask {...props.newTask} />
            <TaskListInModal {...props.taskListInModal} item={props.item} />
        </div>
    )
};
