import TodoActionTypes from './todo.types';

export const addNewTodo = newTodo => ({
    type: TodoActionTypes.ADD_NEW_TODO,
    payload: newTodo
});

export const deleteTodo = todoToDelete => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: todoToDelete
});

export const checkTodo = () => ({
    type: TodoActionTypes.CHECK_TODO
});