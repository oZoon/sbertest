import {
    COUNT_TASK,
    VERSION,
} from 'lib/constants';
import { tasks, todo } from 'lib/phrases';
import Records from 'lib/records';
import { randomString, generatorNumber } from 'lib/utils';

let init = {
    todos: Array(todo.length)
        .fill({ id: '', todoName: '', tasks: [], isExpanded: true, editDialogVisible: false })
        .map((item, index) => {
            return {
                id: randomString(15),
                todoName: todo[index],
                tasks: Array(generatorNumber(COUNT_TASK))
                    .fill({ id: '', taskName: '', isDone: false })
                    .map(() => {
                        return {
                            id: randomString(20),
                            taskName: tasks[index][generatorNumber([0, (tasks[index].length - 1)])],
                            isDone: false,
                        };
                    }),
                isExpanded: false,
                editDialogVisible: false,
            };
        }),
    activity: {
        newTodoShowDialog: false,
        newTodoPartialData: '',
        newTodoShowConfirm: false,

        deleteTodoTodoId: '',
        deleteTodoShowConfirm: false,

        newTaskShowDialog: false,
        newTaskPartialData: '',
        newTaskShowConfirm: false,

        detailsTodoId: '',

        detailsEditNameShowDialog: false,
        detailsEditNamePartialData: '',
        detailsEditNameShowConfirm: false,

        detailsDeleteTaskTaskId: '',
        detailsDeleteTaskShowConfirm: false,

        detailsEditTaskShowDialog: false,
        detailsEditTaskPartialData: '',
        detailsEditTaskTaskId: '',
        detailsEditTaskShowConfirm: false,

        detailsCheckTaskTaskId: '',
        detailsCheckTaskShowConfirm: false,
    }
};

const records = new Records();
const initLocalStorage = records.getRecord(`sber-${VERSION}`);
if (initLocalStorage !== null && initLocalStorage.todos.length != 0) {
    init = initLocalStorage;
}
records.setRecord(`sber-${VERSION}`, init);

export default init;
