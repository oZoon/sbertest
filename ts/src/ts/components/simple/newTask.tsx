import React from 'react';

import Modal from '../so-simple/modal';
import Input from '../so-simple/input';

import {SETTINGS_NEW_TASK_CONFIRM} from '../../lib/constants';
import {newTaskType} from '../../lib/types';

export default (props: newTaskType) => {
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
