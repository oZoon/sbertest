import React from 'react';

import Modal from 'components/simple/modal';
import Input from 'components/simple/input';

import {
    SETTINGS_NEW_TASK_CONFIRM,
} from 'lib/constants';

export default (props) => {
    const {
        activity,
        onNewTaskCancel,
        onNewTaskSubmit,
        onNewTaskPartialData,
        onNewTaskConfirmCancel,
        onNewTaskConfirmSubmit,
    } = props;

    return (
        <Modal
            title="Новая задача"
            isOpen={activity.newTaskShowDialog}
            zIndex='2'
            cancel='true'
            onCancel={onNewTaskCancel}
            submit='true'
            onSubmit={onNewTaskSubmit}
            disabled={activity.newTaskPartialData.length == 0 ? 'disabled' : null}
        >
            <Input
                id='newTask'
                type='text'
                onPartialSave={onNewTaskPartialData}
                partialData={activity.newTaskPartialData}
            />
            {SETTINGS_NEW_TASK_CONFIRM &&
                <Modal
                    title='все правильно ?'
                    isOpen={activity.newTaskShowConfirm}
                    zIndex='3'
                    cancel='true'
                    cancelName='НЕТ'
                    onCancel={onNewTaskConfirmCancel}
                    submit='true'
                    submitName='ДА'
                    onSubmit={onNewTaskConfirmSubmit}
            >
                Новая задача: {activity.newTaskPartialData}
                </Modal>
            }
        </Modal>
    );
};
