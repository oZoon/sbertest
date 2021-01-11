import React from 'react';

type checkType = {
    isDone: boolean
}

export default (props: checkType) => <span className="content__show-todo__done">{props.isDone ? '☑' : '☐'}</span>;
