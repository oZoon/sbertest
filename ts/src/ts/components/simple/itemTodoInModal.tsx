import React from 'react';

import Modal from '../so-simple/modal';
import Input from '../so-simple/input';
import Text from '../so-simple/text';
import DoEdit from '../so-simple/doEdit';

import {SETTINGS_EDIT_TODO_CONFIRM} from '../../lib/constants';
import {inputEditTodoType, modalEditTodoConfirmContentType, modalEditTodoConfirmType, modalEditTodoType, todoType} from '../../lib/types';

type itemTodoInModalType = {
    item: todoType,
    onEditTodoName: Function,
    modalEditTodo: modalEditTodoType,
    inputEditTodo: inputEditTodoType,
    modalEditTodoConfirm: modalEditTodoConfirmType,
    modalEditTodoConfirmContent: modalEditTodoConfirmContentType,
}

export default (props: itemTodoInModalType) => {
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
    );
};
