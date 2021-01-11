import React from 'react';

import Button from 'components/so-simple/button';

export default (props) => {
    // onClick
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
