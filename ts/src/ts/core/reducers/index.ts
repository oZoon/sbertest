import {actionType} from '../../lib/types';
import init from './init';
import todos from './todos';

export default (state = init, action: actionType) => todos(state, action);
