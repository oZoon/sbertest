import React from 'react';

export default ({isDone}) => <span className="content__show-todo__done">{isDone ? '☑' : '☐'}</span>
