import React from 'react';

import ItemTaskInModal from 'components/simple/itemTaskInModal';

export default (props) => {
    // item
    // itemTaskInModal
    return (
        <>
            {props.item.tasks.map(subItem => {
                return (
                    <div
                        className="content__show-todo__item"
                        key={subItem.id}
                    >
                        <ItemTaskInModal
                            subItem={subItem}
                            {...props.itemTaskInModal}
                        />
                    </div>
                );
            })
            }
        </>
    )
};
