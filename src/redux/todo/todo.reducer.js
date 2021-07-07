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
    ]
};

const updateCompleted = (state, completedTodo) => {
    const index = state.findIndex(todo => todo.id === completedTodo.id);
    state[index].completed = completedTodo.completed;
    return state;
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_NEW_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todoItem => todoItem.id !== action.payload.id)
            };
        case TodoActionTypes.TOGGLE_COMPLETE:
            return {
                ...state,
                todoList: updateCompleted(state.todoList, action.payload)
            };
        default:
            return state;
    }
};

export default todoReducer;