import React from 'react';

type arrowType = {
    isExpanded: boolean,
}

export default (props: arrowType) => {
    return (
        <span className="content__show-todo__arrow-symbol">
            {props.isExpanded ? '▼' : '►'}
        </span>
    );
};
