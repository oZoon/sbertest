import init from './init';
import todos from './todos';

export default (state = init, action) => todos(state, action);
