import classes from './TodoListItem.module.css';
import { connect } from 'react-redux';
import { deleteTodo, checkTodo } from '../../../redux/todo/todo.actions';

const TodoListItem = ({ text, id, deleteTodo, checkTodo }) => {
    const handleDelete = todoTodDelete => {
        if (window.confirm('Are you sure you wish to delete this todo?')) deleteTodo(todoTodDelete);
    };
    const handleChange = ({ text, id }) => {
        checkTodo({ id, text });
    };

    return (
        <div className={classes.TodoListItem}>
            <div className={classes.TodoListText}>
                <input type='checkbox' id={id} onChange={handleChange} />
                <label htmlFor={id}>{text}</label>
            </div>
            <button className={classes.TodoListBtn} onClick={() => handleDelete({ id, text })}>Delete</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoTodDelete => dispatch(deleteTodo(todoTodDelete)),
    checkTodo: checkedTodo => dispatch(checkTodo(checkedTodo))
});

export default connect(null, mapDispatchToProps)(TodoListItem);