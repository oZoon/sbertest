import React from 'react';

import Modal from '../so-simple/modal';
import Input from '../so-simple/input';
import DoCheck from '../so-simple/doCheck';
import DoText from '../so-simple/doText';
import DoEdit from '../so-simple/doEdit';
import DoDelete from '../so-simple/doDelete';

import {
    SETTINGS_TASK_DELETE_CONFIRM,
    SETTINGS_TASK_EDIT_CONFIRM,
    SETTINGS_TASK_CHECK_CONFIRM,
} from '../../lib/constants';
import {activityType, inputTaskEditType, modalCheckTaskConfirmType, modalTaskDeleteConfirmType, modalTaskEditConfirmContentType, modalTaskEditConfirmType, modalTaskEditType, taskType} from '../../lib/types';

type itemTaskInModalType = {
    subItem: taskType,
    onCheckTask: Function,
    activity: activityType,
    modalCheckTaskConfirm: modalCheckTaskConfirmType,
    onEditTaskName: Function,
    modalTaskEdit: modalTaskEditType,
    inputTaskEdit: inputTaskEditType,
    modalTaskEditConfirm: modalTaskEditConfirmType,
    modalTaskEditConfirmContent: modalTaskEditConfirmContentType,
    onDeleteTask: Function,
    modalTaskDeleteConfirm: modalTaskDeleteConfirmType,
}

export default (props: itemTaskInModalType) => {
    return (
        <>
            <DoCheck
                itemId={props.subItem.id}
                isDone={props.subItem.isDone}
                onClick={props.onCheckTask}
            />
            <DoText
                itemId={props.subItem.id}
                content={props.subItem.taskName}
                onClick={props.onCheckTask}
            />
            {
                SETTINGS_TASK_CHECK_CONFIRM &&
                props.activity.detailsCheckTaskTaskId == props.subItem.id &&
                <Modal
                    {...props.modalCheckTaskConfirm}
                    itemId={props.subItem.id}>
                    Выполнение задачи: {props.subItem.taskName}
                </Modal>
            }
            <DoEdit
                itemId={props.subItem.id}
                onClick={props.onEditTaskName}
            />
            {props.activity.detailsEditTaskTaskId == props.subItem.id &&
                <Modal
                    {...props.modalTaskEdit}
                    itemId={props.subItem.id}>
                    <Input {...props.inputTaskEdit} />
                    {
                        SETTINGS_TASK_EDIT_CONFIRM &&
                        props.activity.detailsEditTaskTaskId == props.subItem.id &&
                        <Modal
                            {...props.modalTaskEditConfirm}
                            itemId={props.subItem.id}>
                            Редактирование задачи: {props.modalTaskEditConfirmContent}
                        </Modal>
                    }
                </Modal>
            }
            <DoDelete
                itemId={props.subItem.id}
                onClick={props.onDeleteTask}
            />
            {
                SETTINGS_TASK_DELETE_CONFIRM &&
                props.activity.detailsDeleteTaskTaskId == props.subItem.id &&
                <Modal
                    {...props.modalTaskDeleteConfirm}
                    itemId={props.subItem.id}>
                    Удаление задачи: {props.subItem.taskName}
                </Modal>
            }
        </>
    );
};
