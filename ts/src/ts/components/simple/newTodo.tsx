import React from 'react';

import Modal from '../so-simple/modal';
import Input from '../so-simple/input';

import {SETTINGS_NEW_TODO_CONFIRM} from '../../lib/constants';
import {newTodoType} from '../../lib/types';

export default (props: newTodoType) => {
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
