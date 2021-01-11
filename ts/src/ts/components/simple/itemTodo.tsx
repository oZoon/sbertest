import React from 'react';

import Arrow from '../so-simple/arrow';
import DoName from '../so-simple/doText';
import DoDetails from '../so-simple/doDetails';
import DoDelete from '../so-simple/doDelete';
import {itemTodoTypeExtend} from '../../lib/types';

export default (props: itemTodoTypeExtend) => {
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
    );
};
