import React from 'react';

import LeftArrow from 'components/leftArrow';
import TodoName from 'components/todoName';
import Details from 'components/detailsButton';
import Delete from 'components/deleteButton';

export default ({
    isExpanded,
    itemId,
    content,
    onTaskVisible,
    onOpenTodoDetails,
    onDeleteTodo
}) => {
    return (
        <>
            <LeftArrow isExpanded={isExpanded} />
            <TodoName
                itemId={itemId}
                content={content}
                content={content}
                onClick={onTaskVisible}
            />
            <Details
                itemId={itemId}
                onClick={onOpenTodoDetails}
            />
            <Delete
                itemId={itemId}
                onClick={onDeleteTodo}
            />
        </>
    )
}
