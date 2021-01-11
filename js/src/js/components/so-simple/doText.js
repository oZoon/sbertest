import React from 'react';

export default (props) => {
    // onClick
    // itemId
    // content
    return (
        <span
            style={{ cursor: 'pointer' }}
            className="content__show-todo__subtext"
            onClick={() => props.onClick({ data: { id: props.itemId } })}
        >
            {props.content}
        </span>
    );
};
