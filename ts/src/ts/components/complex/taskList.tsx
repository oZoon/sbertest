import React from 'react';
import {taskType} from '../../lib/types';

import ItemTask from '../simple/itemTask';

type taskListType = {
    tasks: taskType[],
}

export default (props: taskListType) => {
    return (
        <>
            {props.tasks.map(subItem => {
                return (
                    <ItemTask
                        key={subItem.id}
                        isDone={subItem.isDone}
                        content={subItem.taskName}
                    />

                );
            })}
        </>
    );
};
