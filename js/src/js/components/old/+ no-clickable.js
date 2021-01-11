import React from 'react';
import classNames from 'classnames';

export default ({
    type,
    className,
    isExpanded,
    isDone,
    content,
    ...attrs
}) => {

    const symbol = type == 'checkMark' ? isDone ? '☑' : '☐' : type == 'content' ? content : type == 'arrow' ? isExpanded ? '▼' : '►' : '';

    return (
        <span
            className={`content__show-todo__${className}`}
            {...attrs}
        >
            {symbol}
        </span>
    );
};
