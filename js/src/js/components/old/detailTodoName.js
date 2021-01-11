import React from 'react';

import Modal from 'components/simple/modal';
import Input from 'components/simple/input';
import NameRow from 'components/todoNameDetail';

import { SETTINGS_EDIT_TODO_CONFIRM } from 'lib/constants';

export default (props) => {
    const {
        item,
        onEditTodoName,
        modalEditTodo,
        inputEditTodo,
        modalEditTodoConfirm,
        modalEditTodoConfirmContent,
    } = props;

    return (
        <div className="content__show-todo__item">
            <NameRow
                content={item.todoName}
                id={item.id}
                onEditTodoName={onEditTodoName}
            />
            <Modal {...modalEditTodo} itemId={item.id}>
                <Input {...inputEditTodo}/>
                {SETTINGS_EDIT_TODO_CONFIRM &&
                    <Modal {...modalEditTodoConfirm}>
                        Редактирование заметки: {modalEditTodoConfirmContent}
                    </Modal>
                }
            </Modal>
        </div>
    )
};
