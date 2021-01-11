import React from 'react';

import Name from '../so-simple/text';
import Check from '../so-simple/check';

type itemTaskType = {
    isDone: boolean,
    content: string,
}

export default (props: itemTaskType) => {
    return (
        <div className="content__show-todo__item">
            <Check isDone={props.isDone} />
            <Name content={props.content} />
        </div>
    );
};
