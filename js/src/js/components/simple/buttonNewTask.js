import React from 'react';

import Button from 'components/so-simple/button';

export default (props) => {
    // onClick
    // id
    return (
        <div className="content__create-task">
            <Button
                className="content__create-task__button"
                onClick={() => props.onClick({ data: { id: props.id } })}
            >
                новая задача
            </Button>
        </div>
    );
};
