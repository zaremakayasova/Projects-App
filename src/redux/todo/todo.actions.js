import TodoActionTypes from './todo.types';

export const addNewTodo = newTodo => ({
    type: TodoActionTypes.ADD_NEW_TODO,
    payload: newTodo
});

export const deleteTodo = todoToDelete => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: todoToDelete
});

export const editTodo = todoToEdit => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: todoToEdit
});

export const toggleComplete = completedTodo => ({
    type: TodoActionTypes.TOGGLE_COMPLETE,
    payload: completedTodo
});

export const hideAlertMsg = () => ({
    type: TodoActionTypes.HIDE_ALERT_MSG
});
