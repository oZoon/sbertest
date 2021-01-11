import React from 'react';
import EditImg from '../../../images/edit.png';

type doEditType = {
    onClick: Function,
    itemId: string,
}

export default (props: doEditType) => {
    return (
        <span
            style={{cursor: 'pointer'}}
            onClick={() => props.onClick({data: {id: props.itemId}})}
        >
            <img src={EditImg} className="content__show-todo__symbols" />
        </span>
    );
};
// ✍
