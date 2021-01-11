import React from 'react';

export default ({ itemId, content, onClick }) => {
    return (
        <span
            style={{ cursor: 'pointer' }}
            className="content__show-todo__text"
            onClick={() => onClick({ data: { id: itemId}})}
        >
            {content}
        </span>
    );
};
