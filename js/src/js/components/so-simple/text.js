import React from 'react';

export default (props) => {
    // content
    return (
        <span className="content__show-todo__subtext">
            {props.content}
        </span>
    );
};
