import React from 'react';
import {itemTaskInModalType, todoType} from '../../lib/types';

import ItemTaskInModal from '../simple/itemTaskInModal';

type taskListInModalType = {
    item: todoType,
    itemTaskInModal: itemTaskInModalType,
}

export default (props: taskListInModalType) => {
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
    );
};
