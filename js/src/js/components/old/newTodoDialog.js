import React from 'react';

import Modal from 'components/simple/modal';
import Input from 'components/simple/input';

import {
    SETTINGS_NEW_TODO_CONFIRM,
} from 'lib/constants';

export default (props) => {
    const {
        modalTodoDialog,
        inputTodoDialog,
        modalTodoDialogConfirm,
    } = props
    return (
        <Modal title="Новая заметка" {...modalTodoDialog}>
            <Input {...inputTodoDialog}/>
            {SETTINGS_NEW_TODO_CONFIRM &&
                <Modal {...modalTodoDialogConfirm}>
                Новая заметка: {inputTodoDialog.partialData}
                </Modal>
            }
        </Modal>
    );
};
