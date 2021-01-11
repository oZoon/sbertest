import React from 'react';

import ItemTask from 'components/simple/itemTask';

export default (props) => {
    // tasks
    return (
        <>
            {props.tasks.map(subItem => {
                return (
                    <ItemTask
                        key={subItem.id}
                        isDone={subItem.isDone}
                        content={subItem.taskName}
                    />

                )
            })}
        </>
    );
};
