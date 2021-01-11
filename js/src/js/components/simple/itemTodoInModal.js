import React from 'react';

import Modal from 'components/so-simple/modal';
import Input from 'components/so-simple/input';
import Text from 'components/so-simple/text';
import DoEdit from 'components/so-simple/doEdit';

import { SETTINGS_EDIT_TODO_CONFIRM } from 'lib/constants';

export default (props) => {
    // item
    // onEditTodoName
    // modalEditTodo
    // inputEditTodo
    // modalEditTodoConfirm
    // modalEditTodoConfirmContent
    return (
        <div className="content__show-todo__item">
            <Text content={props.item.todoName} />
            <DoEdit
                itemId={props.item.id}
                onClick={props.onEditTodoName}

            />
            <Modal {...props.modalEditTodo} itemId={props.item.id}>
                <Input {...props.inputEditTodo} />
                {SETTINGS_EDIT_TODO_CONFIRM &&
                    <Modal {...props.modalEditTodoConfirm}>
                        Редактирование заметки: {props.modalEditTodoConfirmContent}
                    </Modal>
                }
            </Modal>
        </div>
    )
};
