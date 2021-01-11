import React from 'react';

import ButtonNewTodo from '../components/simple/buttonNewTodo';
import NewTodo from '../components/simple/newTodo';
import TodoList from '../components/complex/todoList';
import {contentType} from '../lib/types';

export default (props: contentType) => {
    return (
        <div
            className="content"
        >
            <ButtonNewTodo onClick={props.onNewTodoDialog} />
            <NewTodo {...props.newTodo} />
            <TodoList {...props.todoList}/>
        </div>
    );
};
