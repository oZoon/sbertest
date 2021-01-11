import React from 'react';

import Modal from 'components/simple/modal';
import Clickable from 'components/clickable';
import Input from 'components/simple/input';

import {
    SETTINGS_TASK_DELETE_CONFIRM,
    SETTINGS_TASK_EDIT_CONFIRM,
    SETTINGS_TASK_CHECK_CONFIRM,
} from 'lib/constants';

export default (props) => {
    const {
        item,
        activity,
        onCheckTask,
        modalCheckTaskConfirm,
        onEditTaskName,
        modalTaskEdit,
        inputTaskEdit,
        modalTaskEditConfirm,
        modalTaskEditConfirmContent,
        onDeleteTask,
        modalTaskDeleteConfirm,
    } = props

    return (
        <>
            {item.tasks.map(subItem => {
                return (
                    <div
                        className="content__show-todo__item"
                        key={subItem.id}
                    >
                        <Clickable
                            type="checkMark"
                            className="done"
                            isDone={subItem.isDone}
                            itemId={subItem.id}
                            onClick={onCheckTask}
                        />
                        <Clickable
                            type="content"
                            className="subtext"
                            content={subItem.taskName}
                            itemId={subItem.id}
                            onClick={onCheckTask}
                        />
                        {
                            SETTINGS_TASK_CHECK_CONFIRM &&
                            activity.detailsCheckTaskTaskId == subItem.id &&
                            <Modal {...modalCheckTaskConfirm} itemId={subItem.id}>
                                Выполнение задачи: {subItem.taskName}
                            </Modal>
                        }
                        <Clickable
                            type="edit"
                            className="edit-symbol"
                            itemId={subItem.id}
                            onClick={onEditTaskName}
                        />
                        {activity.detailsEditTaskTaskId == subItem.id &&
                            <Modal {...modalTaskEdit} itemId={subItem.id}>
                                <Input {...inputTaskEdit} />
                                {
                                    SETTINGS_TASK_EDIT_CONFIRM &&
                                    activity.detailsEditTaskTaskId == subItem.id &&
                                    <Modal {...modalTaskEditConfirm} itemId={subItem.id}>
                                        Редактирование задачи: {modalTaskEditConfirmContent}
                                    </Modal>
                                }
                            </Modal>
                        }
                        <Clickable
                            type="delete"
                            className="delete-symbol"
                            itemId={subItem.id}
                            onClick={onDeleteTask}
                        />
                        {
                            SETTINGS_TASK_DELETE_CONFIRM &&
                            activity.detailsDeleteTaskTaskId == subItem.id &&
                            <Modal {...modalTaskDeleteConfirm} itemId={subItem.id}>
                                Удаление задачи: {subItem.taskName}
                            </Modal>
                        }
                    </div>
                );
            })
            }
        </>
    )
};
