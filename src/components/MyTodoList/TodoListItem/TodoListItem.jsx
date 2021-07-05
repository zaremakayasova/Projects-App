import classes from './TodoListItem.module.css';

const TodoListItem = () => {
    return (
        <div className={classes.TodoListItem}>
            <div className={classes.TodoListLabel}>
                <input type='checkbox' id='todo-list' />
                <label htmlFor='todo-list'>Todo 1</label>
            </div>
            <button className={classes.TodoListBtn}>Delete</button>
        </div>
    );
}

export default TodoListItem;