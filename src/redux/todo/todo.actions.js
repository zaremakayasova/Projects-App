import TodoActionTypes from './todo.types';

export const addNewTodo = newTodo => ({
    type: TodoActionTypes.ADD_NEW_TODO,
    payload: newTodo
});

export const deleteTodo = todoToDelete => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: todoToDelete
});

export const toggleComplete = completedTodo => ({
    type: TodoActionTypes.TOGGLE_COMPLETE,
    payload: completedTodo
});