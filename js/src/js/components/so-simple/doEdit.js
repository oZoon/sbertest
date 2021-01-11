import React from 'react';
import EditImg from '../../../images/edit.png';

export default (props) => {
    // onClick
    // itemId
    return (
        <span
            style={{ cursor: 'pointer' }}
            // className="content__show-todo__edit-symbol"
            onClick={() => props.onClick({ data: { id: props.itemId } })}
        >
            <img src={EditImg} className="content__show-todo__symbols" />
        </span>
    );
};
// ✍
