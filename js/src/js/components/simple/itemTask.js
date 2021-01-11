import React from 'react';

import Name from 'components/so-simple/text';
import Check from 'components/so-simple/check';

export default (props) => {
    // isDone
    // content
    return (
        <div className="content__show-todo__item">
            <Check isDone={props.isDone} />
            <Name content={props.content} />
        </div>
    )
}
