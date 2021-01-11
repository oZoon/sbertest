import React from 'react';

import TaskName from 'components/taskName';
import CheckReadOnly from 'components/checkReadOnly';

export default ({ isDone, content }) => {
    return (
        <div className="content__show-todo__item">
            <CheckReadOnly isDone={isDone} />
            <TaskName content={content} />
        </div>
    )
}
