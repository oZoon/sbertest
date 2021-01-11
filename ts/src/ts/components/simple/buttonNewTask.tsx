import React from 'react';

import Button from '../so-simple/button';

type buttonNewTask = {
    onClick: Function,
    id: string,
}

export default (props: buttonNewTask) => {
    return (
        <div className="content__create-task">
            <Button
                className="content__create-task__button"
                onClick={() => props.onClick({data: {id: props.id}})}
            >
                новая задача
            </Button>
        </div>
    );
};
