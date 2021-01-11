import React from 'react';
import classNames from 'classnames';

export default ({
    type,
    className,
    itemId,
    isDone,
    content,
    onClick,
}) => {

    const symbol = type == 'checkMark' ? isDone ? '☑' : '☐' : type == 'content' ? content : type == 'details' ? '🔍' : type == 'delete' ? '✖' : type == 'edit' ? '✍' : '';

    return (
        <span
            style={{ cursor: 'pointer' }}
            className={`content__show-todo__${className}`}
            onClick={() => onClick({ data: { id: itemId } })}
        >
            {symbol}
        </span>
    );
};
