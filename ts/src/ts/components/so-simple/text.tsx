import React from 'react';

type textType = {
    content: string,
}

export default (props: textType) => {
    return (
        <span className="content__show-todo__subtext">
            {props.content}
        </span>
    );
};
