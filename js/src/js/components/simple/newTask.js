import React from 'react';

import Modal from 'components/so-simple/modal';
import Input from 'components/so-simple/input';

import { SETTINGS_NEW_TASK_CONFIRM } from 'lib/constants';

export default (props) => {
    // modalNewTask
    // inputNewTask
    // newTaskConfirm
    // activity
    return (
        <Modal {...props.modalNewTask}>
            <Input {...props.inputNewTask} />
            {SETTINGS_NEW_TASK_CONFIRM &&
                <Modal {...props.newTaskConfirm}>
                    Новая задача: {props.activity.newTaskPartialData}
                </Modal>
            }
        </Modal>
    );
};
