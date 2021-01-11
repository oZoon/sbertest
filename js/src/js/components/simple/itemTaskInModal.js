import React from 'react';

import Modal from 'components/so-simple/modal';
import Input from 'components/so-simple/input';
import DoCheck from 'components/so-simple/doCheck';
import DoText from 'components/so-simple/doText';
import DoEdit from 'components/so-simple/doEdit';
import DoDelete from 'components/so-simple/doDelete';

import {
    SETTINGS_TASK_DELETE_CONFIRM,
    SETTINGS_TASK_EDIT_CONFIRM,
    SETTINGS_TASK_CHECK_CONFIRM,
} from 'lib/constants';

export default (props) => {
    // subItem
    // onCheckTask
    // activity
    // modalCheckTaskConfirm
    // onEditTaskName
    // modalTaskEdit
    // inputTaskEdit
    // modalTaskEditConfirm
    // modalTaskEditConfirmContent
    // onDeleteTask
    // modalTaskDeleteConfirm
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
    )
};
