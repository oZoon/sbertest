import React from 'react';
import DetailsImg from '../../../images/details.png';

export default (props) => {
    // onClick
    // itemId
    return (
        <span
            style={{ cursor: 'pointer' }}
            // className="content__show-todo__details-symbol"
            onClick={() => props.onClick({ data: { id: props.itemId } })}
        >
            <img src={DetailsImg} className="content__show-todo__symbols" />
        </span>
    );
};
// 🔍
