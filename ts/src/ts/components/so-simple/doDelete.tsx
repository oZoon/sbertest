import React from 'react';
import DeleteImg from '../../../images/delete.png';

type doDeleteType = {
    onClick: Function,
    itemId: string,
}

export default (props: doDeleteType) => {
    return (
        <span
            style={{cursor: 'pointer', marginLeft: '8px'}}
            onClick={() => props.onClick({data: {id: props.itemId}})}
        >
            <img src={DeleteImg} className="content__show-todo__symbols" />
        </span>
    );
};
// ✖
