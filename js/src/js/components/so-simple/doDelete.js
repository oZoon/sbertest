import React from 'react';
import DeleteImg from '../../../images/delete.png';

export default (props) => {
    // onClick
    // itemId
    return (
        <span
            style={{ cursor: 'pointer', marginLeft: '8px' }}
            // className="content__show-todo__delete-symbol"
            onClick={() => props.onClick({ data: { id: props.itemId } })}
        >
            <img src={DeleteImg} className="content__show-todo__symbols" />
        </span>
    );
};
// ✖
