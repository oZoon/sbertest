import React from 'react';

type doTextType = {
    onClick: Function,
    itemId: string,
    content: string,
}

export default (props: doTextType) => {
    return (
        <span
            style={{cursor: 'pointer'}}
            className="content__show-todo__subtext"
            onClick={() => props.onClick({data: {id: props.itemId}})}
        >
            {props.content}
        </span>
    );
};
