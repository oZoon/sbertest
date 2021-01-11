import React from 'react';

export default (props) => {
    // onClick
    // itemId
    // isDone
    return (
        <span
            style={{ cursor: 'pointer' }}
            className="content__show-todo__done"
            onClick={() => props.onClick({ data: { id: props.itemId } })}
        >
            {props.isDone ? '☑' : '☐'}
        </span>
    );
};
