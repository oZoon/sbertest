import React from 'react';

export default (props) => {
    // isExpanded
    return (
        <span className="content__show-todo__arrow-symbol">
            {props.isExpanded ? '▼' : '►'}
        </span>
    );
};
