import React from 'react';

import Modal from 'components/so-simple/modal';
import Input from 'components/so-simple/input';

import { SETTINGS_NEW_TODO_CONFIRM } from 'lib/constants';

export default (props) => {
    // modalNewTodo
    // inputNewTodo
    // newTodoConfirm
    return (
        <Modal {...props.modalNewTodo}>
            <Input {...props.inputNewTodo} />
            {SETTINGS_NEW_TODO_CONFIRM &&
                <Modal {...props.newTodoConfirm}>
                    Новая заметка: {props.inputNewTodo.partialData}
                </Modal>
            }
        </Modal>
    );
};
