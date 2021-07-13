import TodoActionTypes from './todo.types';

const INITIAL_STATE = {
    todoList: [
        {
            id: 1,
            text: 'todo 1',
            completed: false
        },
        {
            id: 2,
            text: 'todo 2',
            completed: false

        },
        {
            id: 3,
            text: 'todo 3',
            completed: false
        }
    ],
    successMsg: '',
    deleteMsg: ''
};

const updateTodoList = (state, completedTodo) => {
    const newArray = state.slice();
    const index = state.findIndex(todo => todo.id === completedTodo.id);
    newArray.splice(index, 1, completedTodo);
    return newArray;
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_NEW_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                successMsg: 'A new todo has been added to your list!'
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todoItem => todoItem.id !== action.payload.id),
                deleteMsg: 'A todo has been deleted from your list!'
            };
        case TodoActionTypes.EDIT_TODO:
            return {
                ...state,
                todoList: updateTodoList(state.todoList, action.payload)
            };
        case TodoActionTypes.TOGGLE_COMPLETE:
            return {
                ...state,
                todoList: updateTodoList(state.todoList, action.payload)
            };
        case TodoActionTypes.HIDE_ALERT_MSG:
            return {
                ...state,
                successMsg: '',
                deleteMsg: ''
            };
        default:
            return state;
    }
};

export default todoReducer;