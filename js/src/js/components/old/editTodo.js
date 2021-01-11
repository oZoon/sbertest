import React from 'react';

import NewTaskButton from 'components/newTaskButton';
import NewTaskDialog from 'components/newTaskDialog';
import DetailTodoName from 'components/detailTodoName';
import DetailTask from 'components/detailTask';

export default (props) => {
    const {
        item,
        detailTodoName,
        onNewTask,
        newTaskDialogComponent,
        detailTask,
    } = props

    return (
        <div key={item.id}>
            <DetailTodoName {...detailTodoName} item={item} />
            <NewTaskButton onClick={onNewTask} id={item.id} />
            <NewTaskDialog {...newTaskDialogComponent} />
            <DetailTask {...detailTask} item={item} />
        </div>
    )
};
