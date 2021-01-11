import React from 'react';

import Button from '../so-simple/button';

type buttonNewTodoType = {
    onClick: Function,
}

export default (props: buttonNewTodoType) => {
    return (
        <div className="content__create-todo">
            <Button
                className="content__create-todo__button"
                onClick={props.onClick}
            >
                новая заметка
            </Button>
        </div>
    );
};
