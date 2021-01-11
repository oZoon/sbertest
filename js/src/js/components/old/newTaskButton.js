import React from 'react';

import Button from 'components/simple/button';

export default ({ onClick, id }) => {
    return (
        <div className="content__create-task">
            <Button
                className="content__create-task__button"
                onClick={() => onClick({ data: { id } })}
            >
                новая задача
            </Button>
        </div>
    );
};
