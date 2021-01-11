import React from 'react';

import Arrow from 'components/so-simple/arrow';
import DoName from 'components/so-simple/doText';
import DoDetails from 'components/so-simple/doDetails';
import DoDelete from 'components/so-simple/doDelete';

export default (props) => {
    // isExpanded
    // itemId
    // content
    // onTaskVisible
    // onOpenTodoDetails
    // onDeleteTodo
    return (
        <>
            <Arrow isExpanded={props.isExpanded} />
            <DoName
                itemId={props.itemId}
                content={props.content}
                onClick={props.onTaskVisible}
            />
            <DoDetails
                itemId={props.itemId}
                onClick={props.onOpenTodoDetails}
            />
            <DoDelete
                itemId={props.itemId}
                onClick={props.onDeleteTodo}
            />
        </>
    )
}
