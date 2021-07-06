import TodoActionTypes from './todo.types';

const INITIAL_STATE = {
    todoList: [
        {
            id: 1,
            text: 'todo 1'
        },
        {
            id: 2,
            text: 'todo 2'

        },
        {
            id: 3,
            text: 'todo 3'

        }
    ],
    checked: false
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
        case TodoActionTypes.CHECK_TODO:
            return {
                ...state,
                checked: !state.checked
            };
        default:
            return state;
    }
};

export default todoReducer;