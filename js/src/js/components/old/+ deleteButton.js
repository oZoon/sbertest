import React from 'react';

export default ({ itemId, onClick }) => {
    return (
        <span
            style={{ cursor: 'pointer' }}
            className="content__show-todo__delete-symbol"
            onClick={() => onClick({ data: { id: itemId } })}
        >
            ✖
        </span>
    );
};
