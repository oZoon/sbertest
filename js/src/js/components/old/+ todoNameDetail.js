import React from 'react';

import Clickable from 'components/clickable';
import NoClickable from 'components/no-clickable';

export default ({ content, id, onEditTodoName}) => {
    return (
        <>
            <NoClickable
                type="content"
                className="text"
                content={content}
            />
            <Clickable
                type="edit"
                className="edit-symbol"
                itemId={id}
                onClick={onEditTodoName}
            />
        </>
    )
};
