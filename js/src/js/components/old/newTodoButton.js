import React from 'react';

import Button from 'components/simple/button';

export default ({ onClick }) => {
    return (
        <div className="content__create-todo">
            <Button
                className="content__create-todo__button"
                onClick={onClick}
            >
                новая заметка
            </Button>
        </div>
    );
};
