import React from 'react';

type doCheckType = {
    onClick: Function,
    itemId: string,
    isDone: boolean,
}

export default (props: doCheckType) => {
    return (
        <span
            style={{cursor: 'pointer'}}
            className="content__show-todo__done"
            onClick={() => props.onClick({data: {id: props.itemId}})}
        >
            {props.isDone ? '☑' : '☐'}
        </span>
    );
};
