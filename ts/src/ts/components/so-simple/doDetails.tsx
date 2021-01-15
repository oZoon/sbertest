import React from 'react';
import DetailsImg from '../../../images/details.png';

type doDetailsType = {
    onClick: Function,
    itemId: string,
}

export default (props: doDetailsType) => {
    // console.log({data: {id: props.itemId}});

    return (
        <span
            style={{cursor: 'pointer'}}
            onClick={() => props.onClick({data: {id: props.itemId}})}
        >
            <img src={DetailsImg} className="content__show-todo__symbols" />
        </span>
    );
};
// 🔍
